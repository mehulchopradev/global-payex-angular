import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { NameGeneratorComponent } from './name-generator.component';

describe('NameGeneratorComponent', () => {
  let component: NameGeneratorComponent;
  let fixture: ComponentFixture<NameGeneratorComponent>;
  let firstNameField: HTMLInputElement;
  let lastNameField: HTMLInputElement;
  let fullNameField: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameGeneratorComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameGeneratorComponent);
    component = fixture.componentInstance;

    const firstNameElement = fixture.debugElement.query(By.css('.t-firstName'));
    firstNameField = firstNameElement.nativeElement;

    const lastNameElement = fixture.debugElement.query(By.css('.t-lastName'));
    lastNameField = lastNameElement.nativeElement;

    const fullNameElement = fixture.debugElement.query(By.css('.t-fullName'));
    fullNameField = fullNameElement.nativeElement;

    fixture.detectChanges();
  });

  it('should live update the full name', () => {

    firstNameField.value = 'Mehul';
    firstNameField.dispatchEvent(new Event('input'));

    lastNameField.value = 'Chopra';
    lastNameField.dispatchEvent(new Event('input'));

    fixture.detectChanges(); // tells angular to synchronize bindings
    // needs to be done only while writing tests

    expect(fullNameField.textContent?.trim()).toBe('Full Name: Mehul Chopra');
  });
});
