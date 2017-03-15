import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import * as _ from 'underscore';
import { PagerService } from '../services/pager.service'

@Component({
  selector: 'app-root',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  products: Product[];
  mainProducts: Product[];
  productSerach = { name: '' };
  selectedProduct: Product;
  // pager object
  pager: any = {};

  // paged items
  pagedItems: Product[];
  constructor(private _productService: ProductService, private _router: Router, private pagerService: PagerService) { }

  getProducts(name:string) {
    //this._productService.getProducts().then(products => this.products = products);

    this._productService.getProducts(name).subscribe(
      products => {
        this.products = products;
        this.mainProducts = products;
        this.setPage(1);
      }
    );
  }

  SearchProducts() {
    // if (this.productSerach.name == "") {
    //   this.products = this.mainProducts;
    //   this.setPage(1);
    // } else {
    //   this.products = this.mainProducts.filter(product => product.name.toLowerCase().indexOf(this.productSerach.name.toLowerCase()) > -1)
    //   this.setPage(1);
    // }
    this.getProducts(this.productSerach.name);
  }
  gotoDetail(product: Product) {
    this.selectedProduct = product;
    this._router.navigate(['product/' + this.selectedProduct.id]);
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.products.length, page);

    // get current page of items
    this.pagedItems = this.products.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  ngOnInit() {
    this.getProducts('');
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/