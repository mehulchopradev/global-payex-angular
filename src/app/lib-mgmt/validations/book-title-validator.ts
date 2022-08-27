import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function bookTitleValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const title = control.value;
    if (title && title.toLowerCase().includes('religion')) {
      return {
        bookTitleForbidden: {
          value: control.value
        }
      }
    }

    return null;
  }
}