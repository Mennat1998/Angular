import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule}from '@angular/forms'
import{RouterModule,Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { StudentModule } from './student/student.module';
import { DepartmentModule } from './department/department.module';
import { CourseModule } from './course/course.module';
import { StudentlistComponent } from './student/studentlist/studentlist.component';
import { CourselistComponent } from './course/courselist/courselist.component';
import { CoursedetailsComponent } from './course/coursedetails/coursedetails.component';
import { CourseupdateComponent } from './course/courseupdate/courseupdate.component';
import { CourseaddComponent } from './course/courseadd/courseadd.component';
import { CoursedeleteComponent } from './course/coursedelete/coursedelete.component';

const route:Routes=[
  {path:'courses',component:CourselistComponent},
  {path:'courses/details/:Courseid',component:CoursedetailsComponent },
  {path:'courses/update/:Courseid',component:CourseupdateComponent},
  {path:'courses/add',component:CourseaddComponent},
  {path:'courses/delete/:Courseid',component:CoursedeleteComponent},
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
  BrowserModule,CoreModule,StudentModule,DepartmentModule,FormsModule,CourseModule,RouterModule.forRoot(route)],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
