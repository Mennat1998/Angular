import { Component,Input ,Output,EventEmitter} from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-studentupdate',
  templateUrl: './studentupdate.component.html',
  styleUrls: ['./studentupdate.component.css']
})
export class StudentupdateComponent {
 @Input()
updateStudent=new Student();

@Output()
onstudentUpdate: EventEmitter<Student>=new EventEmitter<Student>();
Update()
{
this.onstudentUpdate.emit(new Student(this.updateStudent.Id,this.updateStudent.name,this.updateStudent.age))
}
}
