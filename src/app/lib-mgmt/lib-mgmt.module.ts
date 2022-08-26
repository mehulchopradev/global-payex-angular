import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LibraryComponent } from './library/library.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { LibraryService } from './library.service';



@NgModule({
  declarations: [
    LibraryComponent,
    BooksComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    LibraryService
  ]
})
export class LibMgmtModule { }
