import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../types/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // todos: Todo[] = [];

  constructor(public todosService: TodosService) {}

  ngOnInit(): void {
  }

  /* get isButtonDisabled() {
    return this.todos.every(todo => !todo.isDone);
  } */

  get markedForCompletionTodos() {
    // return this.todos.filter(todo => todo.isDone).length;
    return this.todosService.getCompletedTodos().length;
  }

  onRemoveCompletedTodos() {
    // this.todos = this.todos.filter(todo => !todo.isDone);
    this.todosService.removeCompletedTodos();
  }

}
