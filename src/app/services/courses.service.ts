import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { Subject } from 'rxjs/internal/Subject';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { runInThisContext } from 'vm';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  thesis = new Course("2dv50E",15);

  private o_courses = new Subject<Course[]>();
  private a_courses : Course[] = [];
  
  
  constructor(){
    this.a_courses.push(this.thesis);
  }

  get():Observable<Course[]>{
    return this.o_courses.asObservable();
  }
  update(code: string, credits: number) {
    let input = new Course(code, credits)    
   
    if(!this.checkRepetitions(input)){
      this.a_courses.push(input);
      this.o_courses.next(this.a_courses);
    } else {
      console.log("COURSE: " + code + " is REPEATED. SKIPPING.")
    }

  }

  checkRepetitions(course : Course) {
    let result = false;
    this.a_courses.forEach(c => {
      if (c.code.includes(course.code))
        result= true;
    })
    return result;
  }
}
