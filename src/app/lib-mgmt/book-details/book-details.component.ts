import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibraryService } from '../library.service';
import { Book } from '../types/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: Book | null = null;

  constructor(private route: ActivatedRoute, private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const { bookId } = params;

      this.libraryService.fetchBookById(bookId).subscribe(book => {
        this.book = book;
      });
    });
  }

}
