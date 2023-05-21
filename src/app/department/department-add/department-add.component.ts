import { Component } from '@angular/core';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from 'src/app/services/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent {
dpt: Department=new Department()
constructor(public dptservice:DepartmentService ,private router:Router){}
AddDept(){
  this.dptservice.Adddepartment(new Department(this.dpt.deptid,
    this.dpt.deptName,this.dpt.location)).subscribe(a=>{
      this.router.navigateByUrl("/departments")
})
}
}
