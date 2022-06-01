import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {map, Subscription} from "rxjs";
import {PhotoService} from "../../../services/photo.service";

@Component({
  selector: 'app-selected-photo',
  templateUrl: './selected-photo.component.html',
  styleUrls: ['./selected-photo.component.scss']
})
export class SelectedPhotoComponent implements OnInit {
  private subscription: Subscription;
  public errorMessage: string ='';

  constructor(
    private photoService: PhotoService,
    public dialogRef: MatDialogRef<SelectedPhotoComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    )
  {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
  }

  public addToFavourite(selectedPhoto): void {
    let shortDataSelectedPhoto = {
      urlPhoto: selectedPhoto.url,
      titlePhoto: selectedPhoto.title,
    }
    this.subscription = this.photoService.postFavPhotoToFB(shortDataSelectedPhoto)
      .subscribe({
      next: (data) => {
        alert('Your photo has been added to favorites');

        this.closeModal();
      },
      error: (error) => {
        this.errorMessage = error.error.message;
      },
      complete: () => {
      }
    })
  }

  public closeModal(): void {
    this.dialogRef.close();
  }
}
