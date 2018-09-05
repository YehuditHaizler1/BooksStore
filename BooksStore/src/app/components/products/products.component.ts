import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  books: any[] = [];
  constructor(private bookService: BooksService, private userService: UserService) {
    this.books = this.bookService.getAllBooks();
  }

  onKeyUp(event) {
    this.books = this.bookService.getBooks(event.target.value);
  }
  //delete- temporary function thatshows an image for each book
  tempFunc() {
    this.books[0].forEach(r => { r.volumeInfo.imageLinks = "../../../../assets/Images/SingleBook.jpg" })
  }

}
