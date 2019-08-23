import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ForkComponent } from './fork/fork.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NavbarComponent, ForkComponent, AboutComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    AboutComponent
  ]
})
export class NavbarModule { }
