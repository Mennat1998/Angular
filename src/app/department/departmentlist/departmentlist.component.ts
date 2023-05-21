import { Component } from '@angular/core';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from 'src/app/services/department.service';
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent {
Departments:Department[]=[];
sub:Subscription|null=null ;
constructor( public dptservice:DepartmentService){}
ngOnInit(): void {
this.dptservice.GetAlldepartments().subscribe(
data=>{
  this.Departments=data;})   }
ngOnDestroy(): void {
this.sub?.unsubscribe();
}
}
