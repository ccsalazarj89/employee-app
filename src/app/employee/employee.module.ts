import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ByEmployeeComponent } from './pages/by-employee/by-employee.component';



@NgModule({
  declarations: [
    ByEmployeeComponent
  ],
  exports:[ByEmployeeComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EmployeeModule { }
