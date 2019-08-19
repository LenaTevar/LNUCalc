import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../services/courses.service';
import { Credits } from '../../../models/Credits/credits';

@Component({
  selector: 'fail',
  templateUrl: './fail.component.html',
  styleUrls: ['./fail.component.css']
})
export class FailComponent implements OnInit {
  $credits : Credits = new Credits (0,0,0,0);
  private subscription;
  constructor(private CoursesService:CoursesService) { 
    this.subscription = this.CoursesService.getCredits().subscribe(o_credits =>{
      this.$credits = o_credits;
      console.log("FAIL COMPONENT" + o_credits.cs);
    })
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
  
}
