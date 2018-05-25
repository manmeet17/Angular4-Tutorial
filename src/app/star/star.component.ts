import { Component, OnInit , Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
  // inputs: ['active'] //under the hood this also creates a new field in the class
})
export class StarComponent implements OnInit {

  //using input decorator is one way of exposing the fields, other way is using component metadata
  @Input('is-favorite')//setting an alias in the input
  active: boolean;
  @Output('change') click = new EventEmitter();

  onClick(){
    this.active=!this.active;
    this.click.emit({newValue: this.active});
  }

  constructor() { }

  ngOnInit() {
    console.log(this.active);    
    console.log("Star Created");
  }
}

export interface FavoriteChangeEvent{
  newValue: boolean
}
