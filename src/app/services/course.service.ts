import { Injectable } from '@angular/core';
import { course } from '../_models/course';



@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: course[]=
  [
    new course(1,"c#",20,20),
    new course(2,"MVC",20,20),
    new course(3,"API",20,20),
    new course(4,"Angular",18,18),
    new course(5,"Nodejs",18,18)
  ]

  GetAllCourses()
  {
    return this.courses ;
  }

  AddCourse(crs:course)
  {
this.courses.push(crs);
  }
  GetcourseById(id:number):course|null
  {
    for(let i=0 ; i<this.courses.length ;i++)
    {
      if(this.courses[i].Courseid==id)
      {
        return this.courses[i]
      }
    }
    return null
  }
  Delete(id:number)
{
    alert("Are you sure?");
    for (let i = 0; i< this.courses.length; i++) {
      if(this.courses[i].Courseid==id)
      {
        this.courses.splice(i,1)
        break;
      }
    }

}

updatecrs(crs:course, crsid:number)
{
for( let i =0 ; i<this.courses.length ; i++)
{
  if( this.courses[i].Courseid==crsid)
  {
    this.courses[i].CourseName = crs.CourseName;
    this.courses[i].LectHours = crs.LectHours;
    this.courses[i].LabsHour = crs.LectHours;
    break;
  }
}
}
  constructor() { }
}
