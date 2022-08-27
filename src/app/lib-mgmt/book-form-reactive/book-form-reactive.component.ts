import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { bookTitleValidator } from '../validations/book-title-validator';

@Component({
  selector: 'app-book-form-reactive',
  templateUrl: './book-form-reactive.component.html',
  styleUrls: ['./book-form-reactive.component.css']
})
export class BookFormReactiveComponent implements OnInit {

  bookFormGroup: FormGroup

  constructor(private fb: FormBuilder) {
    this.bookFormGroup = fb.group({
      title: ['', [Validators.required, Validators.maxLength(10), bookTitleValidator()]],
      price: [0],
      pages: [0, [Validators.required, Validators.min(1)]],
      authors: fb.array([])
    });
  }

  ngOnInit(): void {

  }

  get authors() {
    return this.bookFormGroup.get('authors') as FormArray;
  }

  get title() {
    return this.bookFormGroup.get('title');
  }

  get pages() {
    return this.bookFormGroup.get('pages');
  }

  onSave() {
    // console.log(this.formGroup.valid);
    if (!this.bookFormGroup.valid) {
      alert('Stil some errors in form. Please correct them');
      return;
    }

    const newBook = this.bookFormGroup.value;
    console.log(newBook);
  }

  onAddAuthor() {
    this.authors.push(this.fb.group({
      name: [''],
      gender: ['m']
    }));
  }

  onRemoveAuthor(i: number) {
    this.authors.removeAt(i);
  }

}
