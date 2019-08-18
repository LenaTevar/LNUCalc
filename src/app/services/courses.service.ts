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
  thesis = new Course("2dv50E",15, "Final Thesis");

  private o_courses = new Subject<Course[]>();
  private a_courses : Course[] = [];
  
  
  constructor(){
    this.a_courses.push(this.thesis);
  }

  get():Observable<Course[]>{
    return this.o_courses.asObservable();
  }
  update(code: string, credits: number) {
    let input = this.setType(code, credits);

    if(!this.isRepeated(input)){
      this.a_courses.push(input);
      this.o_courses.next(this.a_courses);
    } else {
      console.log("COURSE: " + code + " is REPEATED. SKIPPING.")
    }
  }

  isRepeated(course : Course) {
    let result = false;
    this.a_courses.forEach(c => {
      if (c.code.includes(course.code))
        result= true;
    })
    return result;
  }

  //TODO: Probably send this to another service

  setType(course:string, credtis:number) : Course{
    let result = new Course(course, credtis);
    let is_CS = new RegExp(/[0-9][dv|DV]{2}[0-9]{3}/);
    let is_CS_Adv = new RegExp(/[2][dv|DV]{2}[0-9]{3}/);

    if(course.match(is_CS_Adv)){
      result.type = "CS - adv"
    }
    if (course.match(is_CS)){      
      result.type = "CS";
    } else {
      result.type = "Free Standing";
    }

    return result;
  }
}
