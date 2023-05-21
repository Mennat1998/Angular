import { Component } from '@angular/core';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from './../../services/department.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription } from 'rxjs';
@Component({
  selector: 'app-departmentdetails',
  templateUrl: './departmentdetails.component.html',
  styleUrls: ['./departmentdetails.component.css']
})
export class DepartmentdetailsComponent {
  Dept:Department|null=null;
  sub:Subscription|null=null ;
  constructor( public dptservice:DepartmentService, private ac:ActivatedRoute){}
  ngOnInit(): void {
    this.sub= this.ac.params.subscribe(data=>{
      this.dptservice.GetdeptById(data["deptid"]).subscribe(d=>
        {
          this.Dept=d ;})
    })
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
















/*
  savechanges(id:any,name:any,location:any)
  {
    this.Dept.deptid=id.value;
    this.Dept.deptName=name.value;
    this.Dept.location=location.value;
  }*/
}
