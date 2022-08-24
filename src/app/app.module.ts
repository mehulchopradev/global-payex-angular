import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameGeneratorComponent } from './name-generator/name-generator.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalcResultsComponent } from './calc-results/calc-results.component';
import { CalcFormComponent } from './calc-form/calc-form.component';
import { TodosComponent } from './todos/todos.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CapitalizePipe } from './capitalize.pipe';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodosService } from './todos.service';

@NgModule({
  declarations: [
    AppComponent,
    NameGeneratorComponent,
    CalculatorComponent,
    CalcResultsComponent,
    CalcFormComponent,
    TodosComponent,
    TodoListComponent,
    CapitalizePipe,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
