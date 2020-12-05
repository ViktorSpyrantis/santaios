import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CartModal } from 'src/modals/cart-modal/cart-modal';
import { CartHandler } from 'src/providers/cart-handler';

@Component({
  selector: 'product-page',
  templateUrl: 'product-page.html',
  styleUrls: ['product-page.scss'],
})
export class ProductPage {
  product: any;
  amountInKilos: number =  0.5;
  bg_img = "assets/icon/white_bg.svg";        // FIXME : change the image
  cartIcon = "assets/icon/shopping_cart.svg";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalCtrl: ModalController,
    private cartHandler: CartHandler
  ) { 
    this.route.queryParams.subscribe(params => {
      if (params) {
        // FIXME : remove this maybe
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
    this.product.weight = this.amountInKilos;
    this.cartHandler.addProductToCart(this.product)
    console.log('PRODUCT : ', this.product)
    this.router.navigate(['/dashboard']);
    // FIXME : see if below code will be used
    // const modal = await this.modalCtrl.create({
    //   component: CartModal,
    //   cssClass: 'todo'
    // });
    // return await modal.present();
  }

}