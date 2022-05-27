import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-selected-images',
  templateUrl: './selected-images.component.html',
  styleUrls: ['./selected-images.component.scss']
})
export class SelectedImagesComponent implements OnInit {
  public arrFavouritePhotos: any;

  @Input() set FavouritePhotos(arrayFavouritePhotos) {
    this.arrFavouritePhotos = arrayFavouritePhotos;
  };
  @Output() removePhoto = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public onRemove(event): void {
    this.removePhoto.emit(event);
  }
}
