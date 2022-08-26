import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalcFormComponent } from './calc-form/calc-form.component';
import { CalcResultsComponent } from './calc-results/calc-results.component';
import { CalculatorComponent } from './calculator/calculator.component';



@NgModule({
  declarations: [
    CalcFormComponent,
    CalcResultsComponent,
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CalcModule { }
