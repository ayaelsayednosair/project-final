import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { Product } from '../interface/product';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  products!: Product[];
  value: number = 0;
  searchText: string = '';
  filtercategory: any;

  constructor(
    private productsrv: ProductsService,
    private cserve: CartService
  ) {}
  ngOnInit(): void {
    this.productsrv.getdatapi().subscribe((dat: Product[]) => {
      this.products = dat;
      this.filtercategory = dat;
      this.products.forEach((a: any) => {
        if (
          a.category === "women's clothing" ||
          a.category === "men's clothing"
        ) {
          a.category = 'fashion';
        }
      });
      console.log(this.products);
    });
    this.cserve.search.subscribe((value: any) => {
      this.searchText = value;
    });
  }

  addTOcart(Product: Product) {
    this.cserve.addtocart(Product, this.value);
  }

  search(event: any) {
    this.searchText = (event.target as HTMLInputElement).value;
    console.log(this.searchText);
    this.cserve.search.next(this.searchText);
  }
  filter(category: string) {
    this.filtercategory = this.products.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }
}
