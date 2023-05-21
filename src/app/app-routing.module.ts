import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule,Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { StudentlistComponent } from './student/studentlist/studentlist.component';
const route:Routes=[
  {path:'home',component: HomeComponent},
  {
    path:'',redirectTo:"home",pathMatch:'full'
  },
{path:'student',component:StudentlistComponent}
  ,
    {
      path: 'courses',
      loadChildren: () => import("./course/course.module").then(m => m.CourseModule)
    }
    ,

    {
      path: 'departments',
      loadChildren: () => import("./department/department.module").then(m => m.DepartmentModule)
    }
  /*
  {path:'courses',component:CourselistComponent,children:
  [
    {path:'details/:Courseid',component:CoursedetailsComponent }
  ]},
  {path:'courses/details/:Courseid',component:CoursedetailsComponent },
  {path:'courses/update/:Courseid',component:CourseupdateComponent},
  {path:'courses/add',component:CourseaddComponent},
  {path:'courses/delete/:Courseid',component:CoursedeleteComponent},*/
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(route)
  ], exports:[RouterModule]
})
export class AppRoutingModule { }
