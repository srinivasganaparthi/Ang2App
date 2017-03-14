import { Injectable } from '@angular/core';
import {PRODUCTS}     from '../data/mock-products';
import { Product } from '../products/product';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ProductService {
  private getProductsUrl = "http://localhost/ApiService/api/Products/GetProducts";
  
  constructor(private http: Http) { }

  getProducts() {
    return this.http.get(this.getProductsUrl)
      .map(response => response.json());
      // return Promise.resolve(PRODUCTS);
  }
   

  //  getProducts() : Observable<Product[]> {
  //        return this.http.get(this.getProductsUrl)
  //                        .map((res) => res.json())
  //                        //...errors if any
  //                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  //    }

	getProduct(id: number) {
    return this.http.get(this.getProductsUrl)
      .map(response => response.json().filter(product => product.id === id)[0]);
    // return Promise.resolve(PRODUCTS).then(
    //   products => products.filter(product => product.id === id)[0]
    // );
  }

  saveProduct(product: Product){
     return Promise.resolve(PRODUCTS).then(function(products){
          
    });
  }
}
