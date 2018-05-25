import { Component } from "@angular/core";


export class CoursesService{
    getCourses(){
        return ["math",'cs',"stats",'deep learning'];
    }
}