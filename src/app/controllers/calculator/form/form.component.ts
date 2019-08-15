import { Component, OnInit } from '@angular/core';
import { Course } from '../../../models/course';
import { FormsModule } from '@angular/forms';
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
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("code: " + this.course.code)
    console.log("credits: " + this.course.credits)
  }
}
