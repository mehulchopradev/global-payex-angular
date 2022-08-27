import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Book } from './types/book';

const url = 'http://localhost:8080/books';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) { }

  private handleError(err: HttpErrorResponse, caught: any) {
    console.log('Error status ', err.status);
    console.log(err.message);
    alert('Something went wrong! Please try again later');

    return throwError(() => new Error(err.message));
  }

  createNewBook(title: string, price: number, pages: number): Observable<Book> {
    return this.http.post<Book>(url, {
      title,
      price,
      pages
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .pipe(
      catchError(this.handleError)
    );
  }

  fetchAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  fetchBookById(bookId: string): Observable<Book> {
    return this.http.get<Book>(`${url}/${bookId}`)
      .pipe(
        catchError(this.handleError)
      );
  }
}
