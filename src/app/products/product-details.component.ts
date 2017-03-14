import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from './product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  id: number;
  private sub: any;
  constructor(private _productService: ProductService,
    private _routeParams: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this._routeParams.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this._productService.getProduct(this.id).subscribe(
        product => this.product = product,
        () => console.log('Completed!')
      );
    });
  }

  goBack() {
    window.history.back();
  }

  saveProduct(){
    
  }

}
