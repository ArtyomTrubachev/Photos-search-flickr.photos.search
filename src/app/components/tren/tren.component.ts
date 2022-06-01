import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, from, map, Observable} from "rxjs";

@Component({
  selector: 'app-tren',
  templateUrl: './tren.component.html',
  styleUrls: ['./tren.component.scss']
})
export class TrenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source = from([
      { name: 'Joe', age: 30 },
      { name: 'Frank', age: 20 },
      { name: 'Ryan', age: 50 }
    ]);
    source.pipe(map(res => {
      return {
        oldValue: res,
        id: res.age+5
      }
    })).subscribe(result=> console.log(result));
  }

}
