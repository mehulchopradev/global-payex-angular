import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcResultsComponent } from './calc-results.component';

describe('CalcResultsComponent', () => {
  let component: CalcResultsComponent;
  let fixture: ComponentFixture<CalcResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
