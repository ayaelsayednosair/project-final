import { EditecoustComponent } from './costomer/editecoust/editecoust.component';
import { ListcoustomerComponent } from './costomer/listcoustomer/listcoustomer.component';
import { AddcoustomerComponent } from './costomer/addcoustomer/addcoustomer.component';
import { ShopComponent } from './shop/shop.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { VeiwComponent } from './veiw/veiw.component';
import { CartComponent } from './cart/cart.component';
import { AppComponent } from './app.component';
import { CostomerComponent } from './costomer/costomer.component';
import { ViewcoustComponent } from './costomer/viewcoust/viewcoust.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'veiw/:id', component: VeiwComponent },
  { path: 'About', component: AboutComponent },
  { path: 'cart', component: CartComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'coustomer', component: CostomerComponent },
  { path: 'addcoustomer', component: AddcoustomerComponent },
  { path: 'list', component: ListcoustomerComponent },
  { path: 'Veiw2/:id', component: ViewcoustComponent },
  { path: 'edite/:id', component: EditecoustComponent },

  { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
