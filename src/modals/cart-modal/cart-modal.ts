import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'cart-modal',
  templateUrl: 'cart-modal.html',
  styleUrls: ['cart-modal.scss'],
})
export class CartModal {
  @Input() product: any;

  title: string = "ΚΑΛΑΘΙ";
  productsInCart = [];

  constructor(
    private modalCtrl: ModalController
  ) {}

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}