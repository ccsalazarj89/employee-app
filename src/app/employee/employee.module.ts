import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ByEmployeeComponent } from './pages/by-employee/by-employee.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    ByEmployeeComponent,
    HomeComponent
  ],
  exports:[ByEmployeeComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EmployeeModule { }
