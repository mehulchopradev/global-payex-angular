import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CalcFormComponent } from '../calc-form/calc-form.component';
import { CalcResultsComponent } from '../calc-results/calc-results.component';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent, CalcFormComponent, CalcResultsComponent ],
      imports: [
        FormsModule
      ],
    })
    .compileComponents();
  });

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
});
