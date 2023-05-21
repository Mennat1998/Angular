import { Component, OnInit, OnDestroy } from '@angular/core';
import { course } from 'src/app/_models/course';
import { CourseService } from 'src/app/services/course.service';
import {  Subscription } from 'rxjs';
@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit, OnDestroy{
  DetailsId=1;
  sub:Subscription|null=null ;
//crsservice:CourseService= new CourseService();
constructor( public crsservice:CourseService)
{

}

ngOnInit(): void {
//  this.courses=this.crsservice.GetAllCourses();
this.crsservice.GetAllCourses().subscribe(
  data=>{
    this.courses=data;
  }
)
}
ngOnDestroy(): void {
  this.sub?.unsubscribe();
}
courses:course[]=[];
}
