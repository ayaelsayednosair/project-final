import { Injectable } from '@angular/core';
import { Product } from '../interface/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  getproduct() {
    throw new Error('Method not implemented.');
  }
  cartitem: Product[] = [];
  private cartitemcount = new BehaviorSubject<number>(0);
  realcartcount = this.cartitemcount.asObservable();
  public search = new BehaviorSubject<string>('');

  constructor() {}
  addtocart(Product: Product, value: number = 1) {
    const checkIdExists = this.cartitem.some((pro) => pro.id === Product.id);
    console.log(checkIdExists);
    if (!checkIdExists) {
      if (value == 0) {
        value = 1;
      }
      Product.qnt = value;

      this.cartitem.push(Product);

      this.cartitemcount.next(this.cartitem.length);
    }
  }
  getcartitem(): Product[] {
    return this.cartitem;
  }
  Deletpro(id: number) {
    const index = this.cartitem.findIndex((pro) => pro.id === id);
    this.cartitem.splice(index, 1);
    this.cartitemcount.next(this.cartitem.length);
  }
}
