import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule,Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
const route:Routes=[
  {path:'home',component: HomeComponent},
  {
    path:'',redirectTo:"home",pathMatch:'full'
  },
    {
      path: 'courses',
      loadChildren: () => import("./course/course.module").then(m => m.CourseModule)
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
