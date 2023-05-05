import { Component, Input,OnInit,OnChanges } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { course } from 'src/app/_models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit{


  Courseid=1

  crs:course|null=null;
  constructor( public crsserve:CourseService, private ac:ActivatedRoute)
  {

  }
 /* ngOnChanges()
{
  this.crs=this.crsserve.GetcourseById(this.Courseid)
}*/
  ngOnInit(): void {

    this.Courseid=this.ac.snapshot.params['Courseid']
    this.crs=this.crsserve.GetcourseById(this.Courseid)
  }
}
