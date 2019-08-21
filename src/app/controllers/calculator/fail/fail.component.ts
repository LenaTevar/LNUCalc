import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../services/courses.service';
import { Credits } from '../../../models/Credits/credits';
import { CoursePlanService } from '../../../services/course-plan.service';
import { CoursePlan } from '../../../models/CoursePlan/course-plan';
import { ProgramBlock } from '../../../models/ProgramBlock/program-block';

@Component({
  selector: 'fail',
  templateUrl: './fail.component.html',
  styleUrls: ['./fail.component.css']
})
export class FailComponent implements OnInit {
  private coursePlan : CoursePlan = new CoursePlan();
  private blocks : ProgramBlock[] = [];
  private subscription;
  constructor(private CoursePlanService : CoursePlanService) { 
   this.CoursePlanService.getCoursePlan().subscribe(cp => {
     this.blocks = cp.planning;
   })
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
  
}
