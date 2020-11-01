import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CartModal } from 'src/modals/cart-modal/cart-modal';

@Component({
  selector: 'product-page',
  templateUrl: 'product-page.html',
  styleUrls: ['product-page.scss'],
})
export class ProductPage {
  product: any;
  amountInKilos: number =  0.5;
  bg_img = "assets/icon/white_bg.svg";
  cartIcon = "assets/icon/shopping_cart.svg";

  constructor(
    private route: ActivatedRoute,
    private modalCtrl: ModalController
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

  calculatePrice(): number {
    return parseFloat(this.product.price.replace(/,/g, '.')) * this.amountInKilos;
  }

  async addToCart() {
    const modal = await this.modalCtrl.create({
      component: CartModal,
      cssClass: 'my-custom-class',
      componentProps: {
        product: JSON.stringify(this.product)
      }
    });
    return await modal.present();
  }

}