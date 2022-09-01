import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByEmployeeComponent } from './employee/pages/by-employee/by-employee.component';

const routes: Routes = [

      {
        path: '',
        component: ByEmployeeComponent,
        pathMatch:'full'
      },
      {
        path:'**',
        redirectTo:''
      }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
