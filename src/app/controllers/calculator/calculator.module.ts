import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { FrontCalcComponent } from './front-calc/front-calc.component';
import { FailComponent } from './fail/fail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CardComponent,
    FormComponent,
    TableComponent,
    FrontCalcComponent,
    FailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FrontCalcComponent
  ]
})
export class CalculatorModule { }
