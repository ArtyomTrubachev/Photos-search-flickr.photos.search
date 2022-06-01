import {Component, OnDestroy, OnInit} from '@angular/core';
import {elementAt, map, Observable, Subscription} from "rxjs";
import {FBRespAfterFuncShowFavPhotos, ResponsePhotos} from "../../models/photo";
import {PhotoService} from "../../services/photo.service";
import {BnNgIdleService} from "bn-ng-idle";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})

export class MainLayoutComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public errorMessage: string ='';
  public arrayPhotos: Array<any> = [];
  public arrayFavouritePhotos: Array<any> = [];

  constructor(private photoService: PhotoService, private bnIdle: BnNgIdleService, private router: Router, private authService: AuthService) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
  //60 = 1 minute
      this.subscription.add(this.bnIdle.startWatching(60).subscribe((res) => {
        if (res && localStorage.getItem('token')) {
          this.authService.logOut();
          this.router.navigateByUrl('login');
        }
      }));
    }

  public showPhotos(tag): void {
    this.subscription.add(this.photoService.getPhoto(tag)
      .pipe(map(res => {
        const arrTitleAndURL = [];
        res.photos.photo.forEach((el) => {
          const photoObj = {
            url: `https://live.staticflickr.com/${el.server}/${el.id}_${el.secret}.jpg`,
            title: `${el.title}`,
          };
          arrTitleAndURL.push(photoObj);
        });
        return arrTitleAndURL;
      }))
      .subscribe({
      next: (data) => {
        this.arrayPhotos = data;
      },
      error: (error) => {
        this.errorMessage = error.error.message;
      },
      complete: () => {
      }
    }));
  }

  public showFavouritePhotos(): void {
    this.subscription.add(this.photoService.getFavouritePhoto()
      .pipe(map((res:FBRespAfterFuncShowFavPhotos) => {
        return Object.keys(res)
          .map(key =>({
            ...res[key],
            id: key
          }))
      }))
      .subscribe({
      next: (data) => {
        if (data) {
          this.arrayFavouritePhotos = data;
        }
        else {
          this.arrayFavouritePhotos = [];
        }
      },
      error: (error) => {
        this.errorMessage = error.error.message;
      },
      complete: () => {
      }
    }));
  }

  public check(index) {
    if (index)
      this.showFavouritePhotos();
  }

  public removeFavouritePhoto(event) {
    this.subscription.add(this.photoService.removeFavouritePhoto(event.target.id).subscribe({
      next: (data) => {
        console.log('Фото удалено');
        this.showFavouritePhotos();
      },
      error: (error) => {
        this.errorMessage = error.error.message;
      },
      complete: () => {
      }
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
