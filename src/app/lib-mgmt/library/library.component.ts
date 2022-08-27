import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  isAddBookFormVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleBookForm() {
    this.isAddBookFormVisible = !this.isAddBookFormVisible;
  }
}
