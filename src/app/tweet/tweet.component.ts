import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  @Input()
  likes: number;
  @Input()
  isActive: boolean;

  @Output('change')
  click=new EventEmitter();

  onClick(){
    this.likes += this.isActive? -1: 1;
    this.isActive=!this.isActive;
    this.click.emit({val: this.likes});
  }
  ngOnInit() {
  }

}
