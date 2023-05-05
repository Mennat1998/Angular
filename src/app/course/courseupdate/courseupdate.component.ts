import { Component } from '@angular/core';
import { course } from 'src/app/_models/course';
import { CourseService } from 'src/app/services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courseupdate',
  templateUrl: './courseupdate.component.html',
  styleUrls: ['./courseupdate.component.css']
})
export class CourseupdateComponent {
  Courseid=1
crs:course=new course()
constructor(public crsservice:CourseService, private ac:ActivatedRoute){}
UpdateCourse()
{
  this.Courseid=this.ac.snapshot.params['Courseid']
this.crsservice.updatecrs(new course(this.crs.Courseid,this.crs.CourseName,this.crs.LectHours,this.crs.LabsHour),this.Courseid)
}

}
