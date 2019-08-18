import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  thesis = new Course("2dv50E",15, "Final Thesis - adv");

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
    this.count();
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
    else if (course.match(is_CS)){      
      result.type = "CS";
    } else {
      result.type = "Free Standing";
    }

    return result;
  }

  /* SCRATCH NOTES */

  CS_Total = 67.5;
  CS_Adv_Total = 22.5;
  Free_Total = 60;
  Non_CS_Total = 30;


  count(){
    let CS_Cred = 0;
    let CS_Adv_Cred = 0;
    let Free = 0;
    let Non_CS = 0;
    this.a_courses.forEach(c =>{
      if(c.type.includes("adv") && CS_Adv_Cred<this.CS_Adv_Total){
        CS_Adv_Cred+= c.credits;
      } else if (c.type.toLowerCase().includes("cs") && CS_Cred < this.CS_Total){
        CS_Cred+= c.credits;
      } else if (!c.type.toLowerCase().includes("cs") && Non_CS < this.Non_CS_Total){
        Non_CS += c.credits;
      } else if (Free < this.Free_Total){
        if(c.type.toLowerCase().includes("cs")){
          c.type += " - FREE STANDING"
        }
        Free += c.credits;
      } else {
        if(!c.type.toLowerCase().includes("not"))
          c.type += " - NOT USED";
      }

    })
    console.log("_________________");
    console.log("CS: " + CS_Cred);
    console.log("ADV: " + CS_Adv_Cred);
    console.log("FREE: " + Free);
    console.log("NON: " + Non_CS);
  }


}
