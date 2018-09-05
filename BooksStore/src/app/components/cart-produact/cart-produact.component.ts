import { Component, Input } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { BooksService } from '../../shared/services/books.service';

@Component({
  selector: 'app-cart-produact',
  templateUrl: './cart-produact.component.html',
  styleUrls: ['./cart-produact.component.css']
})
export class CartProduactComponent   {
  @Input() book:any;
  constructor(private router:Router, private bookService:BooksService) { }
  removeFromCart()
  {
      this.bookService.subject.next(this.book);
  }
}
