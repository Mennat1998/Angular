import { Component } from '@angular/core';
import { CourseService } from './services/course.service';
import {DepartmentService} from './services/department.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CourseService,DepartmentService]
})
export class AppComponent {
  title = 'AngularDay2';
}
