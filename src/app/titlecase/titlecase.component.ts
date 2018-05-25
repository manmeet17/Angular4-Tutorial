import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'titlecase',
  template: `
  <input [(ngModel)]="enter" />
  <p>{{enter | titlecase}}</p>
  `,
  styleUrls: ['./titlecase.component.css']
})
export class TitlecaseComponent implements OnInit {
  enter: string;
  show: any;
  constructor() { }

  ngOnInit() {
    this.show=[];
    this.enter="";
  }
}
