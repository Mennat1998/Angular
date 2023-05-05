import { Component } from '@angular/core';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-departmentdetails',
  templateUrl: './departmentdetails.component.html',
  styleUrls: ['./departmentdetails.component.css']
})
export class DepartmentdetailsComponent {

  Dept:Department=new Department();

  savechanges(id:any,name:any,location:any)
  {
    this.Dept.Deptid=id.value;
    this.Dept.DeptName=name.value;
    this.Dept.Location=location.value;
  }
}
