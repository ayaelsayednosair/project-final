import { Product } from './../interface/product';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  totalPrice: number = 0;
  products!: Product[];
  productitem: any;
  value: number = 1;

  constructor(private cserve: CartService) {}

  ngOnInit() {
    this.products = this.cserve.getcartitem();
    this.calculateTotalPrice();
  }

  Delepro(id: number) {
    this.cserve.Deletpro(id);
    this.calculateTotalPrice();
  }

  increaseProduct(productitem: any) {
    productitem.qnt++;
    this.calculateTotalPrice();
  }

  decreaseProduct(productitem: any) {
    if (productitem.qnt > 1) {
      productitem.qnt--;
      this.calculateTotalPrice();
    }
  }
  calculateTotalPrice() {
    this.totalPrice = this.products.reduce(
      (total, product) => total + product.price * product.qnt,
      0
    );
  }
}
