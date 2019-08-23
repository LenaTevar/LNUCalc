import { Component, OnInit } from '@angular/core';
import { CoursePlanService } from '../../../services/course-plan.service';
import { ProgramBlock } from '../../../models/ProgramBlock/program-block';

@Component({
  selector: 'fail',
  templateUrl: './fail.component.html',
  styleUrls: ['./fail.component.css']
})
export class FailComponent  {
  public blocks : ProgramBlock[] = [];
  private subscription;

  constructor(private CoursePlanService : CoursePlanService) { 
    this.subscription = this.CoursePlanService.getCoursePlan().subscribe(cp => {
     this.blocks = cp.planning;
   })
  }

  public notUsedCredits(block : number):number{
    return 99 - block;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
  
}
