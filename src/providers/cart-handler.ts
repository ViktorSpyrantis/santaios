import { Injectable } from '@angular/core';

@Injectable()
export class CartHandler {

  private productList: {
    image: string,
    info: string,
    name: string,
    price: string,
    weight: number,
    quantity: number
  }[] = [];

  constructor() { 
    console.log(this.productList)
  }

  public addProductToCart(product: any) {
    this.productList.push(product);
  }

  public getProductsInCart() {
    return this.productList;
  }

  public removeProduct(index: number) {
    this.productList.splice(index, 1);
  }

  public deleteProducts() {
    this.productList = [];
  }

}