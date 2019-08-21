import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/models/course/course';
import { CoursePlanService } from '../../../services/course-plan.service';
import { CoursePlan } from '../../../models/CoursePlan/course-plan';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  courses : Course[] = [];
  private subscription;

  constructor(private CoursePlanService:CoursePlanService) {
    this.CoursePlanService.getCourses().subscribe(o_c =>{
      this.courses = o_c;
    })
  }

  ngOnInit() {
   
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  deleteCourseBtn(course:Course){
    this.CoursePlanService.deleteCourse(course);
  }
 

}
