import { Coustomer } from 'src/app/interface/coustomer';
import { Component, OnInit } from '@angular/core';
import { CartService } from './service/cart.service';
import { CoustomerService } from './service/coustomer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'project-final';
  cartitemcount!: number;
  coustItemcount!: number;
  public searchText: string = '';

  constructor(
    private cserve: CartService,
    private coustserv: CoustomerService
  ) {}
  ngOnInit(): void {
    this.cserve.realcartcount.subscribe(
      (count) => (this.cartitemcount = count)
    );
    this.coustserv.realcoustcount.subscribe(
      (count) => (this.coustItemcount = count)
    );
  }
}
