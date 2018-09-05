import { Component, Input } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent {

  @Input() book: any;

  constructor(private router: Router) {}

  showViewDeatails() {
    this.router.navigate(['BooksStore/productsDeatails', this.book.volumeInfo]);
  }
}
