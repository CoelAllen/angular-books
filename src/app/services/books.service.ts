import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  constructor(private http: HttpClient) {}

  public url: string =
    'https://www.googleapis.com/books/v1/volumes?q=programming';

  public postJsonValue: any;
  public getJsonValue: any;

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
  public getBooks() {
    this.http.get(this.url).subscribe((res) => {
      this.getJsonValue = res;
      this.getJsonValue = this.getJsonValue.items;
      console.log(this.getJsonValue, 'service');
    });
  }
}
