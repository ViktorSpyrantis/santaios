import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartHandler {

  productList = [];

  constructor() { 

  }

  public addProductToCart(product: any) {
    this.productList.push(product);
  }

}