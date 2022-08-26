import { TestBed } from '@angular/core/testing';

import { TodosService } from './todos.service';

describe('TodosService', () => {
  let service: TodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosService);
  });

  it('should return proper completed todos', () => {
    service.todos = [
      {
        id: 1,
        title: 'Todo 1',
        isDone: true,
        createdDate: new Date()
      },
      {
        id: 2,
        title: 'Todo 2',
        isDone: false,
        createdDate: new Date()
      },
      {
        id: 3,
        title: 'Todo 3',
        isDone: true,
        createdDate: new Date()
      }
    ]
    const completedTodos = service.getCompletedTodos();
    expect(completedTodos.length).toBe(2);
    expect(completedTodos[0].title).toBe('Todo 1');
    expect(completedTodos[1].title).toBe('Todo 3');
  });

  it('adds the new todo properly', () => {
    expect(service.todos.length).toBe(0);

    service.addNewTodo('Program python');
    service.addNewTodo('Go cycling');

    expect(service.todos.length).toBe(2);
    expect(service.todos[0].title).toBe('Program python');
    expect(service.todos[0].id).toBe(1);

    expect(service.todos[1].title).toBe('Go cycling');
    expect(service.todos[1].id).toBe(2);
  });

  it('removes the completed todos', () => {
    service.todos = [
      {
        id: 1,
        title: 'Todo 1',
        isDone: true,
        createdDate: new Date()
      },
      {
        id: 2,
        title: 'Todo 2',
        isDone: false,
        createdDate: new Date()
      },
      {
        id: 3,
        title: 'Todo 3',
        isDone: true,
        createdDate: new Date()
      }
    ];

    service.removeCompletedTodos();

    expect(service.todos.length).toBe(1);
    expect(service.todos[0].title).toBe('Todo 2');
  });
});
