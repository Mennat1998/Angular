import { Component, Output } from '@angular/core';
import { Student } from 'src/app/_models/student';
import{EventEmitter} from '@angular/core'
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {
  @Output()
  onstudentAdd: EventEmitter<Student>=new EventEmitter<Student>();
nstudent= new Student();
Add()
{
this.onstudentAdd.emit(this.nstudent)
}
}
