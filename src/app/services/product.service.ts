import { Injectable } from '@angular/core';
//import {PRODUCTS}     from '../data/mock-products';
import { Product } from '../models/product';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ProductService {
  private getProductsUrl = "http://localhost/ApiService/api/Products/GetProducts";
  private getProductUrl = "http://localhost/ApiService/api/Products/GetProduct/";
  private getCategoriesUrl = "http://localhost/ApiService/api/Products/GetCategories";

  constructor(private http: Http) { }

  getProducts(name: string) {
    var url = this.getProductsUrl.concat("?name=" + name + "");
    return this.http.get(url)
      .map(response => response.json());
    // return Promise.resolve(PRODUCTS);
  }

  getProduct(id: number) {
    var url = this.getProductUrl.concat(id.toString());
    return this.http.get(url)
      .map(response => response.json());
    // return Promise.resolve(PRODUCTS).then(
    //   products => products.filter(product => product.id === id)[0]
    // );
  }

  getCategories() {
    return this.http.get(this.getCategoriesUrl)
      .map(response => response.json());
  }

  // saveProduct(product: Product){
  //    //return Promise.resolve(PRODUCTS).then(function(products){

  //   });
  // }
}
