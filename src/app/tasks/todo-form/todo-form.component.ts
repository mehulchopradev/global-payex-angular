import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  newTodo: string = '';

  constructor(public todosService: TodosService) { }

  ngOnInit(): void {
  }

  onSave() {
    this.todosService.addNewTodo(this.newTodo);
    this.newTodo = '';
  }
}
