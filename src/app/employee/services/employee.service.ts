import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../interfaces/employee-interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeUrlBase:string = "http://dummy.restapiexample.com/api/v1/employee";

  constructor(private http: HttpClient) { }

    searchEmployee(id: string) : Observable<Employee[]>{

      const url = `${this.employeeUrlBase}/${id}`;
      console.log(url)
      return this.http.get<Employee[]>(url);
    }

}
