import { Component } from '@angular/core';
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
constructor(public crsservice:CourseService){}
AddCourse()
{
this.crsservice.AddCourse(new course(this.Crs.Courseid,this.Crs.CourseName,this.Crs.LectHours,this.Crs.LabsHour))
}
}
