import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from '../services/books.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  constructor(private booksService: BooksService, private http: HttpClient) {}
  public url: string =
    'https://www.googleapis.com/books/v1/volumes?q=programming';

  public postJsonValue: any;
  public getJsonValue: any;

  ngOnInit(): void {
    this.getBooks();
  }
  public getBooks() {
    this.http.get(this.url).subscribe((res) => {
      this.getJsonValue = res;
      this.books = this.getJsonValue.items;
      console.log(this.books, 'service');
    });
  }
  books: Book[] = [];
}
