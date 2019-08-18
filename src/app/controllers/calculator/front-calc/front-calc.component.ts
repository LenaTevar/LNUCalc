import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'frontCalc',
  templateUrl: './front-calc.component.html',
  styleUrls: ['./front-calc.component.css']
})
export class FrontCalcComponent implements OnInit {
  frontCourse : Course; 
  constructor() { }

  ngOnInit() {
  }

  childAddedCourse(inCourse: Course){
    console.log("frontcalc child added course " + inCourse.code);
    this.frontCourse = inCourse;
  }
}
