import { Component } from '@angular/core';
import { Book } from '../types/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  books: Book[] = [
    {
      name: 'clean code',
      author: 'robert martin',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/41zoxjP9lcL._SX323_b01,204,203,200_.jpg',
      amount: 12.95,
    },
    {
      name: 'pragmatic programmer',
      author: 'david thomas',
      image: 'https://m.media-amazon.com/images/I/518FqJvR9aL.jpg',
      amount: 14.95,
    },
    {
      name: 'clean code',
      author: 'robert martin',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/41zoxjP9lcL._SX323_b01,204,203,200_.jpg',
      amount: 12.95,
    },
    {
      name: 'pragmatic programmer',
      author: 'david thomas',
      image: 'https://m.media-amazon.com/images/I/518FqJvR9aL.jpg',
      amount: 14.95,
    },
    {
      name: 'clean code',
      author: 'robert martin',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/41zoxjP9lcL._SX323_b01,204,203,200_.jpg',
      amount: 12.95,
    },
    {
      name: 'pragmatic programmer',
      author: 'david thomas',
      image: 'https://m.media-amazon.com/images/I/518FqJvR9aL.jpg',
      amount: 14.95,
    },
  ];

  cart: Book[] = [];
}
