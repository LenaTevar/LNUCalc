import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { FrontCalcComponent } from './front-calc/front-calc.component';
import { FailComponent } from './fail/fail.component';



@NgModule({
  declarations: [
    CardComponent,
    FormComponent,
    TableComponent,
    FrontCalcComponent,
    FailComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FrontCalcComponent
  ]
})
export class CalculatorModule { }
