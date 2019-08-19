import { Injectable } from '@angular/core';
import { Course } from '../models/course/course';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';
import { CoursePlan } from '../models/CoursePlan/course-plan';
import { Credits } from '../models/Credits/credits';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  

  private o_courses = new Subject<Course[]>();
  private o_credits = new Subject<Credits>();
  private coursePlan : CoursePlan = new CoursePlan();
  
  
  constructor(){
  }

  get():Observable<Course[]>{
    return this.o_courses.asObservable();
  }
  getCredits():Observable<Credits>{
    return this.o_credits.asObservable();
  }

  update(code: string, credits: number) {
    if (this.coursePlan.addCourse(code,credits)){
      this.updateObservables();
    } else {
      console.log("Course repeated, skipping");
    }
  }

  updateObservables(){
    this.updateCourses();
    this.updateCredits();
  }

  updateCourses(){
    this.o_courses.next(this.coursePlan.getCourses())
  }
  updateCredits(){
    this.o_credits.next(this.coursePlan.getCredits());
  }
}

