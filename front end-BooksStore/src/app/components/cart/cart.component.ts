import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartBooks:any[];
  constructor(private bookService:BooksService, private cartService:CartService) {
    this.bookService.subject.subscribe(
      {
        next: (book:any) => {this.removeBook(book)}   
      }
    );
   }
  ngOnInit() {
   this.cartBooks=this.cartService.getCartList();
  }

removeBook(book:any)
{
  this.cartService.removeBookFromCart(book);
}

}
