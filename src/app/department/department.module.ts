import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentdetailsComponent } from './departmentdetails/departmentdetails.component';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { departmentRoutingModule } from './department-routing-module';

import{FormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';
import { DepartmentupdateComponent } from './departmentupdate/departmentupdate.component';
import { DepartmentdeleteComponent } from './departmentdelete/departmentdelete.component';

@NgModule({
  declarations: [
    DepartmentdetailsComponent,
    DepartmentlistComponent,
    DepartmentAddComponent,
    DepartmentupdateComponent,
    DepartmentdeleteComponent
  ],
  imports: [
    CommonModule,departmentRoutingModule,FormsModule,RouterModule,
  ],exports:[DepartmentdetailsComponent,
    DepartmentlistComponent, DepartmentupdateComponent,
    DepartmentdeleteComponent]
})
export class DepartmentModule { }
