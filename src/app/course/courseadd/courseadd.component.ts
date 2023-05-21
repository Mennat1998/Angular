import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { course } from 'src/app/_models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courseadd',
  templateUrl: './courseadd.component.html',
  styleUrls: ['./courseadd.component.css'],
  //providers:[CourseService]
})
export class CourseaddComponent {
Crs: course=new course();
//crsservice: CourseService= new CourseService()
//crsservice: CourseService ;
/*constructor(crsservice:CourseService)
{
this.crsservice=crsservice ;
}*/
constructor(public crsservice:CourseService ,private router:Router){}
AddCourse()
{
this.crsservice.AddCourse(new course(this.Crs.courseid,this.Crs.courseName,
  this.Crs.lectHours,this.Crs.labsHour)).subscribe(a=>{
    this.router.navigateByUrl("/courses")}
  )
}
}
