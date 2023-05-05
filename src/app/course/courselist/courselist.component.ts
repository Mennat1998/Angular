import { Component, OnInit} from '@angular/core';
import { course } from 'src/app/_models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit{
  DetailsId=1;
//crsservice:CourseService= new CourseService();
constructor( public crsservice:CourseService)
{

}

ngOnInit(): void {
  this.courses=this.crsservice.GetAllCourses();
}
courses:course[]=[];
}
