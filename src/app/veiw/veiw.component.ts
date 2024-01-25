import { Product } from './../interface/product';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../service/products.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-veiw',
  templateUrl: './veiw.component.html',
  styleUrls: ['./veiw.component.css'],
})
export class VeiwComponent implements OnInit {
  id!: number;
  Product!: Observable<Product>;
  populerproducts!: Product[];
  value: number = 1;
  products!: Product[];

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private cserve: CartService
  ) {}
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.params['id']);
    this.Product = this.productService.getProductById(this.id);
    this.productService.populerproducts().subscribe((data: any) => {
      console.warn(data);
      this.populerproducts = data;
    });
  }
  addTOcart(Product: Product) {
    this.cserve.addtocart(Product, this.value);
  }
  decrease() {
    if (this.value > 1) {
      this.value--;
    }
  }

  increase() {
    this.value++;
  }
}
