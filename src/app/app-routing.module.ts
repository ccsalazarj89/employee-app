import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByEmployeeComponent } from './employee/pages/by-employee/by-employee.component';
import { HomeComponent } from './employee/pages/home/home.component';

const routes: Routes = [

      {
        path: '',
        component: HomeComponent,
        pathMatch:'full'
      },
      {
        path: 'employee',
        component: ByEmployeeComponent,
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
