import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-selected-images',
  templateUrl: './selected-images.component.html',
  styleUrls: ['./selected-images.component.scss']
})
export class SelectedImagesComponent implements OnInit {
  public arrFavouritePhotos: any;

  @Input() set FavouritePhotos(arrayFavouritePhotos) {
    this.arrFavouritePhotos = arrayFavouritePhotos;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
