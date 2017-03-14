import { Injectable } from '@angular/core';
import {PRODUCTS}     from './data/mock-products';

@Injectable()
export class ProductService {

  constructor() { }
  getProducts() {
    return Promise.resolve(PRODUCTS);
  }

	getProduct(id: number) {
    return Promise.resolve(PRODUCTS).then(
      products => products.filter(product => product.id === id)[0]
    );
  }
}
