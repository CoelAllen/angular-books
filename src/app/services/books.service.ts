import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { NewBook } from '../types/NewBook';

@Injectable()
export class BooksService {
  constructor(private http: HttpClient) {}

  public url: string =
    'https://www.googleapis.com/books/v1/volumes?q=programming';

  public getJsonValue: any;

  public stuff: any;
  books: Book[] = [];
  public newBooks: NewBook[] = [];

  // getBooks() {
  //   return [
  //     {
  //       name: 'clean code',
  //       author: 'robert martin',
  //       image:
  //         'https://images-na.ssl-images-amazon.com/images/I/41zoxjP9lcL._SX323_b01,204,203,200_.jpg',
  //       amount: 12.95,
  //     },
  //     {
  //       name: 'pragmatic programmer',
  //       author: 'david thomas',
  //       image: 'https://m.media-amazon.com/images/I/518FqJvR9aL.jpg',
  //       amount: 14.95,
  //     },
  //     {
  //       name: 'clean code',
  //       author: 'robert martin',
  //       image:
  //         'https://images-na.ssl-images-amazon.com/images/I/41zoxjP9lcL._SX323_b01,204,203,200_.jpg',
  //       amount: 12.95,
  //     },
  //     {
  //       name: 'pragmatic programmer',
  //       author: 'david thomas',
  //       image: 'https://m.media-amazon.com/images/I/518FqJvR9aL.jpg',
  //       amount: 14.95,
  //     },
  //   ];
  // }
}
