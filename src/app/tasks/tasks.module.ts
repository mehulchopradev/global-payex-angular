import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodosComponent } from './todos/todos.component';
import { TodosService } from './todos.service';
import { CommonUtilitiesModule } from '../common-utilities/common-utilities.module';

@NgModule({
  declarations: [
    TodoFormComponent,
    TodoListComponent,
    TodosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CommonUtilitiesModule
  ],
  providers: [
    TodosService
  ]
})
export class TasksModule { }
