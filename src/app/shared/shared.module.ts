import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LogoComponent } from './logo/logo.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SidebarComponent,
    LogoComponent
  ],
  exports: [
    SidebarComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
