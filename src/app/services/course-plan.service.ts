import { Injectable } from '@angular/core';
import { CoursePlan } from '../models/CoursePlan/course-plan';
import { ProgramBlock } from '../models/ProgramBlock/program-block';
import { CTYPE } from '../models/CTYPE/ctype.enum';
import { Course } from '../models/course/course';
import { Subject } from 'rxjs/internal/Subject';
import { CoursesService } from './courses.service';
@Injectable({
  providedIn: 'root'
})
export class CoursePlanService {
  private coursePlan : CoursePlan = new CoursePlan();
  private o_coursePlan = new Subject<CoursePlan>();
  private o_courses = new Subject<Course[]>();

  constructor(private coursesService:CoursesService){
    this.initCoursePlan();
  }

  public getCoursePlan(){    
    return this.o_coursePlan.asObservable();
  }

  public getCourses(){
    console.log("CPS>>> get courses")
    return this.o_courses.asObservable();
  }
  private updateObservables(){
    this.updateCoursePlan();
    this.updateCourses();
  }
  private updateCoursePlan(){
    this.o_coursePlan.next(this.coursePlan);
  }
  private updateCourses(){
    let result : Course[] = [];

    this.coursePlan.planning.forEach(block=>{
      result = [...result, ...block.courses];
    })

    this.o_courses.next(result);
  }

  public addCourse(code:string, credtis:number) : boolean {
    console.log("CPS>> ADDING COURSE");
    let c = this.buildCourse(code,credtis); 
    if(this.isRepeated(c)){
      console.log("CPS>> course: " + code + "repeated. Skipping.");
      return false;
    } else {
      this.findAvailableBlock(c);
      this.updateObservables();
    }
  }

  private findAvailableBlock(course:Course) {
    for (var i = 0, len = this.coursePlan.planning.length; i < len; i++){
      let planningType = this.coursePlan.planning[i].type;
      let planningCredits = this.coursePlan.planning[i].credits;
      console.log(planningType + " - " + course.type);
      if(planningType === course.type && planningCredits > 0){
        this.coursePlan.planning[i].courses.push(course);
        this.coursePlan.planning[i].credits -= course.credits;
        break;

      } else if (planningType === course.type) {
        course = this.coursesService.buildCourseNextType(course);
      }
    }
  }
  

  private buildCourse(code:string, credits:number):any{
    return this.coursesService.buildCourse(code,credits);
  }

  private isRepeated(course:Course) : boolean{
    let result = false;
    for (var i = 0, len = this.coursePlan.planning.length; i < len; i++) {
      var found = this.coursePlan.planning[i].courses.find(function (el){
        return el.code.includes(course.code);
      })
      if(found){
        result = true;
        break;
      } 
    }
    return result;
  }
  
  public deleteCourse(course:Course){
    for (var i = 0, len = this.coursePlan.planning.length; i < len; i++){
      if(this.coursePlan.planning[i].type === course.type){
        let index = this.coursePlan.planning[i].courses.indexOf(course);
        this.coursePlan.planning[i].courses.splice(index,1);
        break;
      }
    }
    this.updateObservables();
  }

  private initCoursePlan(){
    
    let non_program =  new ProgramBlock("FREE - NOT CS", CTYPE.NON_PROGRAM, 30, new RegExp(/[0-9]![dv|DV]{2}[0-9]{3}/));
    let program_adv =  new ProgramBlock("CS_ADV", CTYPE.PROGRAM_ADV, 67.5, new RegExp(/[2][dv|DV]{2}[0-9]{3}/));
    let program = new ProgramBlock("CS", CTYPE.PROGRAM, 67.5, new RegExp(/[0-9][dv|DV]{2}[0-9]{3}/));
    let free =  new ProgramBlock("FREE STANDING", CTYPE.FREE, 60, new RegExp(""));
    let not_used =  new ProgramBlock("NOT USED", CTYPE.NOT_USED, 99, new RegExp(""));

    this.coursePlan.planning.push(non_program,program_adv,program,free,not_used);
  }
}
