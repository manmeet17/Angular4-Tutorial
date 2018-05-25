import { Component } from '@angular/core';
import { FavoriteChangeEvent } from './star/star.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';
  //Star component
  active=true;
  //tweet component
  tweet={
    likes: 1056,
    isLiked: false,
    body: "Here is a tweet"
  }
  //app component-directives
  courses;
  viewMode='some';
  task={
    name: "Some Name",
    assignee: null
  }
  onViewChange(){
    this.viewMode=this.viewMode=='list'?'map':'list';
  }

  onAdd(){
    this.courses.push({ id:4, name: "course4"});
  }

  load(){
    this.courses=[
      {id: 1, name: "course1"},
      {id: 2, name: "course2"},
      {id: 3, name: "course3"}
    ];
  }

  onRemove(course){
    let index=this.courses.indexOf(course);
    this.courses.splice(index,1);
  }

  trackCourse(index,course): number{
    return course? course.id: undefined;
  }
  //Tweet Component
  onChange(value: {val: number}){
    console.log(value.val);
    this.tweet.likes=value.val;
  }

  //Favorite Component
  onFavoriteChange(active: FavoriteChangeEvent){
    console.log("Favorite Changed: "+active.newValue);
  }
}
