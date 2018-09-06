import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { UserService } from '../../shared/services/user.service';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  isAnonymous:boolean=false;
  book: any;
  constructor(private route: ActivatedRoute, private router:Router , private userService:UserService, private cartService:CartService) {
    if (localStorage["user"])
    this.isAnonymous = true;
   }
  ngOnInit() {
    this.route.params.forEach(p => {
      this.book = p;
    })
  }
  addBookToCart() {
    this.cartService.addBookToCartList(this.book)
    this.returnProduct();

  }
  returnProduct() {
    this.router.navigate(['BooksStore/products']);
  }
  
}
