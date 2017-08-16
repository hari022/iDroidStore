import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../../firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products: any;
  constructor(private _firebase: FirebaseService) { }
// get all products
  ngOnInit() {
    this._firebase.getProducts().subscribe(products => {
      this.products = products});
  }
  // Add products to cart
  getProductDetails( key: any, quantity: any) {
    const newQuantity = quantity + 1;
    this._firebase.saveTOCart(key, newQuantity);
  }

}
