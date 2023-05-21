import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { course } from 'src/app/_models/course';
import {  Subscription } from 'rxjs';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-coursedelete',
  templateUrl: './coursedelete.component.html',
  styleUrls: ['./coursedelete.component.css']
})
export class CoursedeleteComponent {


  Courseid=1
  sub:Subscription|null=null ;
  constructor( public crsserve:CourseService, private ac:ActivatedRoute)
  {

  }
  ngOnInit(): void {
/*
    this.Courseid=this.ac.snapshot.params['courseid'];
    this.crsserve.Delete(this.Courseid);*/
    this.sub = this.ac.params.subscribe(
      data=>{
        this.crsserve.Delete(data['courseid']).subscribe()
      }
    )
  }
}
