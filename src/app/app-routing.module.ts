import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontCalcComponent } from './controllers/calculator/front-calc/front-calc.component';
import { AboutComponent } from './navbar/about/about.component';


const routes: Routes = [
  {
    path:'about',
    component: AboutComponent
  },
  {
  path: '',
  component: FrontCalcComponent
  },
  {
    path:'**',
    component: FrontCalcComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
