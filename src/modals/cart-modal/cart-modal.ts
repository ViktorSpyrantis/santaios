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
  weightPriceText: string = "Τιμή κιλού: ";
  piecePriceText: string = "Τιμή τεμαχίου: ";
  confirmButtonLabel: string = "Αγορά";
  exitButtonLabel: string = "Έξοδος";
  clearCartButtonLabel: string = "Άδειασμα καλ.";
  clearIcon: string = "trash-outline";
  emptyCartText: string = "Το καλαθι σας είναι άδειο";
  productsInCart = [];

  constructor(
    private modalCtrl: ModalController,
    private cartHandler: CartHandler
  ) {
    this.productsInCart = cartHandler.getProductsInCart();
  }

  async openOrderModal() {
    this.dismiss();
    const modal = await this.modalCtrl.create({
      component: OrderModal,
      cssClass: 'todo'
    });
    return await modal.present();
  }

  clearCartContent() {
    this.cartHandler.deleteProducts();
    this.productsInCart = this.cartHandler.getProductsInCart();
  }

  removeProduct(index: number) {
    this.cartHandler.removeProduct(index);
    this.productsInCart = this.cartHandler.getProductsInCart();
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}