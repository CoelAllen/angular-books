import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, CartComponent],
  imports: [
    BrowserModule,
    BooksModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
