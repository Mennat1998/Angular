import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule}from '@angular/forms'
import{HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { StudentModule } from './student/student.module';
import { DepartmentModule } from './department/department.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
  BrowserModule,CoreModule,StudentModule,DepartmentModule
  ,FormsModule,AppRoutingModule,HttpClientModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
