import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentdetailsComponent } from './departmentdetails/departmentdetails.component';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { DepartmentAddComponent } from './department-add/department-add.component';



@NgModule({
  declarations: [
    DepartmentdetailsComponent,
    DepartmentlistComponent,
    DepartmentAddComponent
  ],
  imports: [
    CommonModule
  ],exports:[DepartmentdetailsComponent,DepartmentlistComponent]
})
export class DepartmentModule { }
