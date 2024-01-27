import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { CartService } from 'src/app/service/cart.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-categoryes',
  templateUrl: './categoryes.component.html',
  styleUrls: ['./categoryes.component.css'],
})
export class CategoryesComponent implements OnInit {
  products!: Product[];
  productCategory!: any;
  searchText: string = '';
  filtercategory: any;
  value: number = 0;
  constructor(
    private productsrv: ProductsService,
    private cserve: CartService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.productsrv.getdatapi().subscribe((dat: Product[]) => {
      this.products = dat;
      this.filtercategory = dat;

      this.productCategory = this.products.filter((a: any) => {
        if (
          a.category ==
            this.route.snapshot.params['category'].replace('_', ' ') ||
          this.route.snapshot.params['category'].replace('_', ' ') == ''
        ) {
          return a;
        }
      });
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
      if (
        a.category == this.route.snapshot.params['category'] ||
        this.route.snapshot.params['category'] == ''
      ) {
        return a;
      }
    });
  }
}
