import { Injectable } from '@angular/core';
import { Department} from '../_models/department';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class DepartmentService
{
  baseurl:string="https://localhost:7117/api/departments/"
  constructor(public http:HttpClient){}

  GetAlldepartments()
  {
    return this.http.get<Department[]>(this.baseurl)
  }
  Adddepartment(dpt:Department)
  {
    return this.http.post<Department>(this.baseurl,dpt)

  }
 GetdeptById(id:number)
 {
  return this.http.get<Department>(this.baseurl+id)
 }
 Delete(id:number){  return this.http.delete<Department>(this.baseurl+id)   }
 updatedpt(dpt:Department)
 {
  return this.http.put<Department>(this.baseurl,dpt)
 }

}
