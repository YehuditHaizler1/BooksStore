import { Component, OnInit } from '@angular/core';
import { Store } from '../../shared/models/store.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent   {
store:Store;
  constructor() {
    this.store=new Store();
    this.store.id=1;
    this.store.name="Look in book";
    this.store.address={
      city:"beni-brak",
      street:"rabi Akiva",
      numHouse:45
    }
    this.store.picture="../../../assets/Images/BooksStore.jpg";

   }
}
