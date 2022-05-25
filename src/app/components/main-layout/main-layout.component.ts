import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})

export class MainLayoutComponent implements OnInit {
  public arrayStudents: Array<any> = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  public showPerson(event): void {
    console.log(event);
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
    ];
  }

}
