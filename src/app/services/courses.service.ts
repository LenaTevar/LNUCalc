import { Injectable } from '@angular/core';
import { Course } from '../models/course/course';
import { CTYPE } from '../models/CTYPE/ctype.enum';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private isProgram = new RegExp(/[0-9][dv|DV]{2}[0-9]{3}/);
  private isProgramAdv = new RegExp(/[2][dv|DV]{2}[0-9]{3}/);

  public buildCourse(code:string, credits:number){
    if(code.match(this.isProgram)){
      console.log("CS>> is program")
      return this.buildProgramCourse(code, credits);
    } else {
      return this.buildNonProgramCourse(code, credits);
    }
  }

  public buildCourseNextType(course:Course){
    let index = course.type.valueOf();
    if(course.type === CTYPE.NON_PROGRAM)
      index = 2;
    else
      index++;


    switch (index) {      
      case 2:
          course.type =  CTYPE.PROGRAM;
          break;
      case 3:
          course.type =  CTYPE.FREE;
          break;
      case 4:
          course.type =  CTYPE.NOT_USED;
          break;
      default:
          course.type =  CTYPE.NOT_USED; 
          break;      
    }
    return course;
  }

  private buildProgramCourse(code:string, credits:number): Course{
    if(code.match(this.isProgramAdv)){
      return new Course(code,credits,CTYPE.PROGRAM_ADV)
    } else {
      return new Course(code,credits,CTYPE.PROGRAM);
    }
  }
  private buildNonProgramCourse(code:string, credits:number) : Course{
    return new Course(code,credits,CTYPE.NON_PROGRAM);
  }

 
}

