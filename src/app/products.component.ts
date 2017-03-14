import {Component, OnInit} from '@angular/core';
import {ProductService} from './product.service';
import {Product} from './product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;

  constructor(private _productService: ProductService,private _router: Router) { }

  getProducts() {
    this._productService.getProducts().then(products => this.products = products);
    //var userFilter: products = { name: '' };
  }

gotoDetail(product: Product) {
  this.selectedProduct = product;
    this._router.navigate(['product/' + this.selectedProduct.id]);
  }

  ngOnInit() {
    this.getProducts();
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/