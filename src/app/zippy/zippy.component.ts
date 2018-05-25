import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
  constructor(private el: ElementRef) {
    console.log(this.el);
   }
   
  active=false;
  value=this.el.nativeElement.value;
  
  @Input() title;
  dropDown(){
    this.active=!this.active;
  }

  ngOnInit() {
  }

}
