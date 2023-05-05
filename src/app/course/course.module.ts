import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourselistComponent } from './courselist/courselist.component';
import { CourseaddComponent } from './courseadd/courseadd.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { CourseupdateComponent } from './courseupdate/courseupdate.component';
import{FormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';
import { CoursedeleteComponent } from './coursedelete/coursedelete.component';




@NgModule({
  declarations: [CourselistComponent, CourseaddComponent, CoursedetailsComponent, CourseupdateComponent, CoursedeleteComponent],
  imports: [
CommonModule,FormsModule,RouterModule
  ],
  exports:[CourselistComponent,CourseaddComponent,CoursedetailsComponent, CourseupdateComponent,CoursedeleteComponent]
})
export class CourseModule { }
