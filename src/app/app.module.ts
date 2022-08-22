import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameGeneratorComponent } from './name-generator/name-generator.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalcResultsComponent } from './calc-results/calc-results.component';
import { CalcFormComponent } from './calc-form/calc-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NameGeneratorComponent,
    CalculatorComponent,
    CalcResultsComponent,
    CalcFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
