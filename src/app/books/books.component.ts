import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from '../services/books.service';
import { HttpClient } from '@angular/common/http';
import { NewBook } from '../types/NewBook';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  constructor(private booksService: BooksService, private http: HttpClient) {}
  public url: string =
    'https://www.googleapis.com/books/v1/volumes?q=programming';

  public getJsonValue: any;
  public stuff: any;

  ngOnInit(): void {
    this.getBooks();
  }
  public getBooks() {
    this.http.get(this.booksService.url).subscribe((res) => {
      this.getJsonValue = res;
      this.books = this.getJsonValue.items;
      console.log(this.books, 'service');
      this.stuff = this.books.map((b) => {
        var fullBook = b.volumeInfo;
        console.log(fullBook, 'mapping');
        return fullBook;
      });
    });
  }

  books: Book[] = [];
}
