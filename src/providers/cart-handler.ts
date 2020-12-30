import { Injectable } from '@angular/core';

@Injectable()
export class CartHandler {

  private productList = [];

  constructor() { 
    console.log(this.productList)
  }

  public addProductToCart(product: any) {
    this.productList.push(product);
  }

  public getProductsInCart() {
    return this.productList;
  }

}