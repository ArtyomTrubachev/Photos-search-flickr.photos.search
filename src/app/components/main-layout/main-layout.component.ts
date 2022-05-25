import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
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

  constructor(private photoService: PhotoService) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
  }

  public showPerson(event): void {
/*    console.log(event);
    this.arrayStudents = [
      {
        name: 'Artyom',
        secondName: 'Trubachyov',
        age: '28'
      },
      {
        name: 'Dmitry',
        secondName: 'Romanov',
        age: '33'
      },
      {
        name: 'Oleg',
        secondName: 'Starostin',
        age: '22'
      }
    ];*/
  }

  public showPhotos(tag): void {
    this.subscription = this.photoService.getPhoto(tag).subscribe({
      next: (data) => {
        console.log(data.photos.photo);
        this.arrayPhotos = data.photos.photo;
      },
      error: (error) => {
        this.errorMessage = error.error.message;
      },
      complete: () => {
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
