import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { VeiwComponent } from './veiw/veiw.component';
import { CartComponent } from './cart/cart.component';
import { CostomerComponent } from './costomer/costomer.component';
import { AddcoustomerComponent } from './costomer/addcoustomer/addcoustomer.component';
import { ListcoustomerComponent } from './costomer/listcoustomer/listcoustomer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewcoustComponent } from './costomer/viewcoust/viewcoust.component';
import { EditecoustComponent } from './costomer/editecoust/editecoust.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ShopComponent,
    ContactComponent,
    VeiwComponent,
    CartComponent,
    CostomerComponent,
    AddcoustomerComponent,
    ListcoustomerComponent,
    ViewcoustComponent,
    EditecoustComponent,
    FilterPipe,
  ],

  imports: [
    BrowserModule,

    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
