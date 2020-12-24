import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartHandler } from 'src/providers/cart-handler';
import { OrderModal } from '../order-modal/order-modal';

@Component({
  selector: 'cart-modal',
  templateUrl: 'cart-modal.html',
  styleUrls: ['cart-modal.scss'],
})
export class CartModal {
  @Input() product: any;

  title: string = "ΚΑΛΑΘΙ";
  buttonLabel: string = "Αγορά";
  productsInCart = [];

  constructor(
    private modalCtrl: ModalController,
    private cartHandler: CartHandler
  ) {
    this.productsInCart = cartHandler.getProductsInCart();
  }

  async openOrderModal() {
    const modal = await this.modalCtrl.create({
      component: OrderModal,
      cssClass: 'todo'
    });
    return await modal.present();
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}