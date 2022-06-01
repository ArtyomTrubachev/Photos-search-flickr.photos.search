import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {debounceTime, Subject} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {SelectedPhotoComponent} from "./selected-photo/selected-photo.component";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public searchSubject: Subject<string> = new Subject();
  public arrSearchResPhotos: any;

  @Input() set SearchResPhotos(arrayPhotos) {
    this.arrSearchResPhotos = arrayPhotos;
  };
  @Output() search = new EventEmitter<string>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.searchSubject.pipe(debounceTime(700)).subscribe((text) => {
      this.search.emit(text);
    });
  }

  public onSearch(event): void {
    this.searchSubject.next(event.target.value);
  }

  public showPopUpPhoto(item): void {
    const dialogRef = this.dialog.open(SelectedPhotoComponent, {
      width: '850px',
      height: '670px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
