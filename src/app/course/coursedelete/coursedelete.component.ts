import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { course } from 'src/app/_models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-coursedelete',
  templateUrl: './coursedelete.component.html',
  styleUrls: ['./coursedelete.component.css']
})
export class CoursedeleteComponent {


  Courseid=1
  constructor( public crsserve:CourseService, private ac:ActivatedRoute)
  {

  }
  ngOnInit(): void {

    this.Courseid=this.ac.snapshot.params['Courseid'];
    this.crsserve.Delete(this.Courseid);
  }
}
