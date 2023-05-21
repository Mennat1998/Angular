import { Injectable } from '@angular/core';
import { course } from '../_models/course';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CourseService {
baseurl:string="https://localhost:7117/api/courses/"
private courses: course[]=[]
GetAllCourses()
  {
    return this.http.get<course[]>(this.baseurl)
  }
  AddCourse(crs:course)
  {
    return this.http.post<course>(this.baseurl,crs)

  }
 GetcourseById(id:number)
 {
  return this.http.get<course>(this.baseurl+id)
 }
 Delete(id:number){  return this.http.delete<course>(this.baseurl+id)   }
 updatecrs(crs:course)
 {
  return this.http.put<course>(this.baseurl,crs)
 }

 constructor(public http:HttpClient){}
 //
 /* private courses: course[]=
  [
    new course(1,"c#",20,20),
    new course(2,"MVC",20,20),
    new course(3,"API",20,20),
    new course(4,"Angular",18,18),
    new course(5,"Nodejs",18,18)
  ]*/

/*  GetAllCourses()
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
      if(this.courses[i].courseid==id)
      {
        return this.courses[i]
      }
    }
    return null
  }/*
  Delete(id:number)
{
    alert("Are you sure?");
    for (let i = 0; i< this.courses.length; i++) {
      if(this.courses[i].courseid==id)
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
  if( this.courses[i].courseid==crsid)
  {
    this.courses[i].courseName = crs.courseName;
    this.courses[i].lectHours = crs.lectHours;
    this.courses[i].labsHour = crs.lectHours;
    break;
  }
}
}
  constructor() { }*/
}
