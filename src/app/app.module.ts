import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {ProductService} from './services/product.service';
import {PagerService} from './services/pager.service';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './products/product-details.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    ProductDetailsComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [ProductService,PagerService],
  bootstrap: [AppComponent],
})

export class AppModule { }
