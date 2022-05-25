import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {debounceTime, Subject} from "rxjs";
import {stringify} from "@angular/compiler/src/util";

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

  constructor() { }

  ngOnInit(): void {
    this.searchSubject.pipe(debounceTime(700)).subscribe((text) => {
      this.search.emit(text);
    });
  }

  public onSearch(event): void {
    this.searchSubject.next(event.target.value);
  }
}
