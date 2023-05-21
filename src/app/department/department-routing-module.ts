import {RouterModule,Routes} from '@angular/router'
import{NgModule} from '@angular/core'
import { DepartmentlistComponent } from './departmentlist/departmentlist.component'
import { DepartmentdetailsComponent } from './departmentdetails/departmentdetails.component'
import { DepartmentAddComponent } from './department-add/department-add.component'
import { DepartmentupdateComponent } from './departmentupdate/departmentupdate.component'
import { DepartmentdeleteComponent } from './departmentdelete/departmentdelete.component'


const route:Routes=[
  {path:'',component:DepartmentlistComponent},
  {path:'details/:deptid',component:DepartmentdetailsComponent },
  {path:'update/:deptid',component:DepartmentupdateComponent},
  {path:'add',component:DepartmentAddComponent},
  {path:'delete/:deptid',component:DepartmentdeleteComponent}

]
@NgModule({
  declarations: [
  ],
  imports: [
  RouterModule.forChild(route)],
})
export class departmentRoutingModule
{

}
