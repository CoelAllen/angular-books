import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { NewBook } from 'src/app/types/NewBook';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() book: NewBook = {} as NewBook;
  isInCart: boolean = false;

  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) {}

  // addToCart() {
  //   this.cartService.add(this.book);
  //   this.isInCart = true;
  // }
  // removeFromCart() {
  //   this.cartService.remove(this.book);
  //   this.isInCart = false;
  // }
  isAuthenticated() {
    return this.authService.isAuthenticated;
  }
}
