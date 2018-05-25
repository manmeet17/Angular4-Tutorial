import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: "courses", //<courses>
    //This is an alternative for interpolating strings
    //It is called property binding
    template: `
    <img [src]="imageUrl" />
    <button class="btn btn-primary" [class.active]="isActive">Save</button>
    <button [style.backgroundColor]="isActive ? 'blue' : 'red'">Read</button>
    <br/><br/>
    <div (click)="onDivClick()">
    <button (click)="onSave($event)">Save</button>
    </div>
    <input [value]="email" (keyup.enter)="email=$event.target.value; onKeyUp()" />
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    
    <table>
        <tr>
            <td [attr.colspan]="colSpan"></td>
        </tr>
    </table>
    `
    // # symbol in input is a variable to reference the HTML field
    // we can just use $event object as parameter and code but keyup.enter is better
    //banana in a box - [()], implementing two waybinding b/w the Component and the View
})
export class CoursesComponent{
    imageUrl="";
    colSpan=2;
    isActive=false;
    email="me@gmail.com";

    onSave($event){
        $event.stopPropagation();
        console.log($event);
    }

    onDivClick(){
        console.log("Div Clicked");
    }

    onKeyUp(){
        console.log(this.email);
    }
}
















