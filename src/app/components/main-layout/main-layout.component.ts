import {Component, OnDestroy, OnInit} from '@angular/core';
import {elementAt, Observable, Subscription} from "rxjs";
import {ResponsePhotos} from "../../models/photo";
import {PhotoService} from "../../services/photo.service";

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

  constructor(private photoService: PhotoService) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
  }

  public showPhotos(tag): void {
    this.subscription.add(this.photoService.getPhoto(tag).subscribe({
      next: (data) => {
        console.log(data.photos.photo);
        this.arrayPhotos = data.photos.photo;
      },
      error: (error) => {
        this.errorMessage = error.error.message;
      },
      complete: () => {
      }
    }));
  }

  public showFavouritePhotos(): void {
    this.subscription.add(this.photoService.getFavouritePhoto().subscribe({
      next: (data) => {
        this.arrayFavouritePhotos = Object.entries(data);
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
      },
      error: (error) => {
        this.errorMessage = error.error.message;
      },
      complete: () => {
        this.showFavouritePhotos();
      }
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
