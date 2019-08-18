import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CoursesService } from '../../../services/courses.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  private $courses : Course[] = [];
  private subscription;

  constructor(private courseService : CoursesService) {
    console.log("Table >> get subcription")
    
    this.subscription = this.courseService.get().subscribe(o_courses =>{
      this.$courses = o_courses;
    });
   
  }

  ngOnInit() {
   
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
 

}
