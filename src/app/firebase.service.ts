import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class FirebaseService {
  products: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) { }
  getProducts() {
    this.products = this.db.list('/iDroidStore') as FirebaseListObservable<Product[]>  // connections to database and get products from database
    return this.products;
  }
  saveTOCart(key: any,  quantity: any) {
    const items = this.db.list('/iDroidStore');
    items.update(key, {cartQuantity: quantity}); // update cart quantity
    // items.push({ price: price });
    // console.log(key, price);
  }

  // getCart() {
  //   this.products = this.db.list('/iDroidStore/cart') as FirebaseListObservable<Cart[]>
  //   return this.products;
  // }

}
interface Product {
  $key?: string,
  Description?: string,
  OS?: string,
  cartQuantity?: string,
  Price?: string
  img?: string
}

// interface Cart {
//   name?: string,
//   price?: string,
// }
