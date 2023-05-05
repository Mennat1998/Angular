import { Component } from '@angular/core';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent {
Departments:Department[]=
[ new Department(1,"PD","Alex"),
new Department(2,"OS","Alex"),

]
}
