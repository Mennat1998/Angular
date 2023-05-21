import { Component } from '@angular/core';
import { course } from 'src/app/_models/course';
import { CourseService } from 'src/app/services/course.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Subscription, Subscriber } from 'rxjs';
@Component({
  selector: 'app-courseupdate',
  templateUrl: './courseupdate.component.html',
  styleUrls: ['./courseupdate.component.css']
})
export class CourseupdateComponent {
  Courseid=1
  sub:Subscription|null=null ;
crs:course=new course()
constructor(public crsservice:CourseService, private ac:ActivatedRoute,private router:Router){}
ngOnInit(): void {
    this.sub= this.ac.params.subscribe(data=>{
      this.crsservice.GetcourseById(data["courseid"]).subscribe(d=>
        {
          this.crs=d ;
        })
    })
  }
UpdateCourse()
{
  this.crsservice.updatecrs(this.crs).subscribe(a=>
    {
      this.crs=a;
      this.router.navigateByUrl("/courses")
    }
    )
}
 /* this.Courseid=this.ac.snapshot.params['courseid']
this.crsservice.updatecrs(new course(this.crs.courseid,this.crs.courseName,this.crs.lectHours,this.crs.labsHour))
this.router.navigateByUrl("/courses")*/



}
