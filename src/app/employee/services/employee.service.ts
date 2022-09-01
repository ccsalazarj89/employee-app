import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../interfaces/employee-interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeUrlBase:string = "http://localhost:8080/api/v1/employees";

  constructor(private http: HttpClient) { }

    searchEmployee(id: string) : Observable<Employee>{
      const url = `${this.employeeUrlBase}/${id}`;
      return this.http.get<Employee>(url);
    }

    searchAllEmployee(): Observable<Employee[]>{
      const url = `${this.employeeUrlBase}`;
      return this.http.get<Employee[]>(url);
    }

}
