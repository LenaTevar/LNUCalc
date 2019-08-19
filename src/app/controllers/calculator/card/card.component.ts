import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/models/course/course';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public sentCourse : Course;
  constructor() { }

  ngOnInit() {
  }
}
