import { Component } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {
students:Student[]=[
  new Student(1,"Mennatllah",23),
  new Student(2,"Hannah",22),
  new Student(3,"Sarah",24),
  new Student(4,"Farah",20),
  new Student(5,"Ayan",25),
  new Student(6,"Eyad",26),
]

detailsstd=new Student()
detailsflag=false;
updatestd=new Student()
addstd=new Student()
showdetails(id:number)
{
for(let i=0 ; i<this.students.length ; i++)
{
  if(this.students[i].Id==id)
  {
this.detailsstd=this.students[i];
this.detailsflag=true
break;
  }
}
}
Update(id:number)
{
  for(let i=0 ; i<this.students.length ; i++)
  {
    if(this.students[i].Id==id)
    {
  this.updatestd=this.students[i];
  break;
    }
  }
}
Delete(id:number)
{
    alert("Are you sure?");
    for (let i = 0; i< this.students.length; i++) {
      if(this.students[i].Id==id)
      {
        this.students.splice(i,1)
        break;
      }
    }

}

AddStudent(std:Student)
{
this.students.push(std)
}
updateStudent(std:Student)
{
  for (let i = 0; i < this.students.length; i++) {
    if(this.students[i].Id==std.Id)
    {
      this.students[i].Id=std.Id
      this.students[i].name=std.name
      this.students[i].age=std.age

this.students[i]=(new Student( std.Id, std.name,std.age ))
      break;
    }
  }
}
}
