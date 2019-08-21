import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CoursePlanService } from '../../../services/course-plan.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  course = {
    code:"",
    credits:0
  }
  

  constructor(private CoursePlanService:CoursePlanService) { }

  ngOnInit() {
  }

  onSubmit(input) : void {
    console.log("FORM COMPONENT>>" + input.value.code);
    this.CoursePlanService.addCourse(input.value.code, input.value.credits);
  } 
}
