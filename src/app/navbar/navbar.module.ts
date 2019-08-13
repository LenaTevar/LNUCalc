import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ForkComponent } from './fork/fork.component';



@NgModule({
  declarations: [NavbarComponent, ForkComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
