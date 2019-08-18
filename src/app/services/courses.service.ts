import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { Subject } from 'rxjs/internal/Subject';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
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
  update(code: string, credtis: number) {
    this.a_courses.push(new Course(code, credtis));
    this.o_courses.next(this.a_courses);
  }
}
