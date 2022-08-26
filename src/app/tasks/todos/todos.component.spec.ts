import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CommonUtilitiesModule } from 'src/app/common-utilities/common-utilities.module';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodosService } from '../todos.service';

import { TodosComponent } from './todos.component';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  let newTodoField: HTMLInputElement;
  let saveBtn: HTMLButtonElement;
  let actionArea: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosComponent, TodoFormComponent, TodoListComponent ],
      imports: [
        FormsModule,
        CommonUtilitiesModule
      ],
      providers: [
        TodosService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;

    newTodoField = fixture.debugElement.query(By.css('.t-newTodo')).nativeElement;
    saveBtn = fixture.debugElement.query(By.css('.t-save')).nativeElement;

    fixture.detectChanges();
  });

  it('should initially not show the action area and show it after a todo is added', fakeAsync(() => {
    let actionArea = fixture.debugElement.query(By.css('.t-actionArea'));
    expect(actionArea).toBeNull();

    newTodoField.value = 'go to school';
    newTodoField.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    saveBtn.click();

    fixture.detectChanges();
    tick();

    expect(saveBtn.disabled).toBeTrue();
    actionArea = fixture.debugElement.query(By.css('.t-actionArea'));
    expect(actionArea).toBeTruthy();
  }));
});
