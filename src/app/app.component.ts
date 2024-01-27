import { Component, OnInit } from '@angular/core';
import { CartService } from './service/cart.service';
import { CoustomerService } from './service/coustomer.service';
import { Product } from './interface/product';
import { ProductsService } from './service/products.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'project-final';
  email = new FormControl('');
  cartitemcount!: number;
  coustItemcount!: number;
  searchText: string = '';

  categories: any[] | undefined;
  Product!: Observable<Product>;

  filtercategory: any;
  products!: Product[];

  constructor(
    private cserve: CartService,
    private coustserv: CoustomerService,
    private proservec: ProductsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.cserve.realcartcount.subscribe(
      (count) => (this.cartitemcount = count)
    );
    this.coustserv.realcoustcount.subscribe(
      (count) => (this.coustItemcount = count)
    );
    this.proservec.getCategories().subscribe(
      (data) => {
        this.categories = Array.from(
          new Set(data.map((product) => product.category))
        );
        console.log(this.categories);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
    this.proservec.getdatapi().subscribe((dat: Product[]) => {
      this.products = dat;
      this.filtercategory = dat;
      // this.products.forEach((a: any) => {
      //   if (
      //     a.category === "women's clothing" ||
      //     a.category === "men's clothing"
      //   ) {
      //     a.category = 'fashion';
      //   }
      // });
      this.products ==
        this.products.filter((a: any) => {
          if (
            a.category == this.route.snapshot.params['category'] ||
            this.route.snapshot.params['category'] == ''
          ) {
            return a;
          }
        });
      console.log(this.products);
    });
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
  save() {
    Swal.fire('thenk You ....', 'You submitted Successfully', 'success');
    console.log('fgdgfgfjhgj');
    this.email.reset();
  }
  search(event: any) {
    this.searchText = (event.target as HTMLInputElement).value;
    console.log(this.searchText);
    this.cserve.search.next(this.searchText);
  }
}
