import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { CalcFormComponent } from './calc-form.component';

describe('CalcFormComponent', () => {
  let component: CalcFormComponent;
  let fixture: ComponentFixture<CalcFormComponent>;

  let firstNoElement: HTMLInputElement;
  let secondNoElement: HTMLInputElement;
  let ansElement: HTMLInputElement;
  let buttonElement: HTMLButtonElement;
  let operationsElement: HTMLSelectElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcFormComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcFormComponent);
    component = fixture.componentInstance;

    firstNoElement = fixture.debugElement.query(By.css('.t-firstNo')).nativeElement;
    secondNoElement = fixture.debugElement.query(By.css('.t-secondNo')).nativeElement;
    operationsElement = fixture.debugElement.query(By.css('.t-operations')).nativeElement;
    ansElement = fixture.debugElement.query(By.css('.t-ans')).nativeElement;
    buttonElement = fixture.debugElement.query(By.css('.t-calculate')).nativeElement;

    fixture.detectChanges();
  });

  it('should perform calculation', fakeAsync(() => {
    firstNoElement.value = '10';
    firstNoElement.dispatchEvent(new Event('input'));

    secondNoElement.value = '5';
    secondNoElement.dispatchEvent(new Event('input'));

    operationsElement.value = '-';
    operationsElement.dispatchEvent(new Event('change'));

    buttonElement.click();

    fixture.detectChanges();
    tick();

    expect(ansElement.value).toBe('5');

    operationsElement.value = '*';
    operationsElement.dispatchEvent(new Event('change'));

    buttonElement.click();

    fixture.detectChanges();
    tick();

    expect(ansElement.value).toBe('50');
  }));
});
