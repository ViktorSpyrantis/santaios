import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-page',
  templateUrl: 'product-page.html',
  styleUrls: ['product-page.scss'],
})
export class ProductPage {
  product: any;
  amount: number =  0;

  constructor(
    private route: ActivatedRoute, 
  ) { 
    this.route.queryParams.subscribe(params => {
      if (params) {
        // this.product = {
        //   name: params.name,
        //   image: params.image,
        //   price: params.price
        // }
        this.product = JSON.parse(params.product);
      }
    });
  }

}