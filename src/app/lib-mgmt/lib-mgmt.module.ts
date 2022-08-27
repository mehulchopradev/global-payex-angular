import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LibraryComponent } from './library/library.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { LibraryService } from './library.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookFormComponent } from './book-form/book-form.component';
import { BookFormReactiveComponent } from './book-form-reactive/book-form-reactive.component';



@NgModule({
  declarations: [
    LibraryComponent,
    BooksComponent,
    BookDetailsComponent,
    BookFormComponent,
    BookFormReactiveComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LibraryService
  ]
})
export class LibMgmtModule { }
