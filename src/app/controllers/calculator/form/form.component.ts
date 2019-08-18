import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../../../models/course';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { CoursesService } from '../../../services/courses.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  course: Course = {
    code: "",
    credits: null 
  };
  
  constructor(private coursesService:CoursesService) { }

  ngOnInit() {
    
  }

  onSubmit(input) : void {
    this.coursesService.update(input.value.code, input.value.credits);
  } 
}
