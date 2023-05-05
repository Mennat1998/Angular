import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import{FormsModule} from '@angular/forms';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentupdateComponent } from './studentupdate/studentupdate.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component'


@NgModule({
  declarations: [
    StudentdetailsComponent,
    StudentlistComponent,
    StudentAddComponent,
    StudentupdateComponent,
    StudentDeleteComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],exports:[StudentdetailsComponent,StudentlistComponent]
})
export class StudentModule { }
