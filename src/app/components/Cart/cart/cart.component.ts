import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../../firebase.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: any;
  constructor(private _firebase: FirebaseService) { }
// get all the products from cart
  ngOnInit() {
    this._firebase.getProducts().subscribe(products => {
      // console.log(products)
      this.products = products});
  }
  // Increase product quantity
  addProductQuantity( key: any, quantity: any) {
    const newQuantity = quantity + 1;
    this._firebase.saveTOCart(key, newQuantity);
    // console.log(key, price);
  }
  // Reduce product quantity
  reduceProductQuantity( key: any, quantity: any) {
    const newQuantity = quantity - 1;
    this._firebase.saveTOCart(key, newQuantity);
    // console.log(key, price);
  }

}
