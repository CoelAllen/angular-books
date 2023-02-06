import { Injectable } from '@angular/core';
import { NewBook } from '../types/NewBook';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: NewBook[] = [];
  constructor() {}

  add(book: NewBook) {
    this.cart.push(book);
  }
  remove(book: NewBook) {
    // this.cart = this.cart.filter((b) => b.name != book.name);
  }
  get() {
    return this.cart;
  }
}
