import { Component, Input,OnInit,OnChanges,OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { course } from 'src/app/_models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit,OnDestroy{
  Courseid=1
  crs:course|null=null;
  sub:Subscription|null=null ;
  constructor( public crsserve:CourseService, private ac:ActivatedRoute)
  {

  }
 /* ngOnChanges()
{
  this.crs=this.crsserve.GetcourseById(this.Courseid)
}*/
  ngOnInit(): void {

  //  this.Courseid=this.ac.snapshot.params['Courseid']
   // this.crs=this.crsserve.GetcourseById(this.Courseid)
/*
  this.sub= this.ac.params.subscribe(Data=>
    {this.crs=this.crsserve.GetcourseById(Data["courseid"])})*/
    this.sub= this.ac.params.subscribe(data=>{
      this.crsserve.GetcourseById(data["courseid"]).subscribe(d=>
        {
          this.crs=d ;
        })
    })
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
