import { Component, Input,Output,EventEmitter } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent {
  @Input()
DetailsStudent=new Student();

  @Output()
  onhide: EventEmitter<boolean>=new EventEmitter<boolean>();
Hide()
{
this.onhide.emit(false)
}

  //Day2
  /*
std:Student=new Student();
changeId(Stdid:any)
{
  this.std.Id=Stdid.value;
}
changeName(stdname:any)
{
  this.std.name=stdname.value;
}
changeAge(stdage:any)
{
  this.std.age=stdage.value;
}
title="mvc";*/
}
