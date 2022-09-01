import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/employee-interface';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-by-employee',
  templateUrl: './by-employee.component.html',
  styleUrls: ['./by-employee.component.css']
})
export class ByEmployeeComponent implements OnInit {

  parameter: string = '';

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  search(){
    if (this.parameter=== ""){
      this.employeeService.searchAllEmployee()
      .subscribe((employees)=>{ 
          this.employees=employees})
    }else{
      this.employeeService.searchEmployee(this.parameter)
      .subscribe((employees)=> {
          this.employees = [employees]})
    }
    
  }

}
