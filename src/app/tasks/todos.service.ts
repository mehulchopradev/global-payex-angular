import { Injectable } from '@angular/core';
import { TasksModule } from './tasks.module';
import { Todo } from './types/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {

  id: number = 0;

  todos: Todo[] = [
  ];

  constructor() { }

  addNewTodo(newTodo: string) {
    const todo: Todo = {
      id: ++this.id,
      title: newTodo,
      isDone: false,
      createdDate: new Date(),
    }

    this.todos.push(todo);
  }

  getCompletedTodos() {
    return this.todos.filter(todo => todo.isDone)
  }

  removeCompletedTodos() {
    this.todos = this.todos.filter(todo => !todo.isDone);
  }
}
