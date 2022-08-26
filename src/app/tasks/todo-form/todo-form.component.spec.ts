import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { TodosService } from '../todos.service';

import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;

  let newTodoField: HTMLInputElement;
  let saveBtn: HTMLButtonElement;
  let saveBtnDe: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFormComponent ],
      imports: [
        FormsModule
      ],
      providers: [
        TodosService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;

    newTodoField = fixture.debugElement.query(By.css('.t-newTodo')).nativeElement;
    saveBtnDe = fixture.debugElement.query(By.css('.t-save'));
    saveBtn = saveBtnDe.nativeElement;

    fixture.detectChanges();
  });

  it('enables disables button based on text field data', () => {
    expect(saveBtn.disabled).toBeTrue();
    expect(newTodoField.value).toBe('');

    newTodoField.value = 'go to school';
    newTodoField.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(saveBtn.disabled).toBeFalse();

    newTodoField.value = '';
    newTodoField.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(saveBtn.disabled).toBeTrue();
  });

  it('updates the gui elements after save', fakeAsync(() => {
    newTodoField.value = 'go to school';
    newTodoField.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(saveBtn.disabled).toBeFalse();

    saveBtn.click();

    fixture.detectChanges();
    tick(); // can use only in an async test. Will wait for the ngModel to sync the
    // state data changes with the UI that is bound to the ngModel

    expect(saveBtn.disabled).toBeTrue();
    expect(newTodoField.value).toBe('');
  }));
});
