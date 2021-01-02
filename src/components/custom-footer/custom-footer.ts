import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { CartModal } from 'src/modals/cart-modal/cart-modal';

@Component({
  selector: 'custom-footer',
  templateUrl: 'custom-footer.html',
  styleUrls: ['custom-footer.scss']
})
export class CustomFooter {

  likeIcon = "assets/icon/heart_white.svg";
  cartIcon = "assets/icon/shopping_cart.svg";
  homeIcon = "assets/icon/home.svg";
  expandIcon = "assets/icon/"
  logoIcon = "assets/icon/logo_small.svg"

  columnArray = [
    {
      id: "back",
      link: "BACK",
      icon: "assets/icon/back.svg"
    },
    {
      id: "home",
      link: "dashboard",
      icon: "assets/icon/home.svg"
    },
    {
      id: "cart",
      link: "CART",
      icon: "assets/icon/shopping_cart.svg"
    },
    {
      id: "logo",
      link: "dashboard",
      icon: "assets/icon/logo_small.svg"
    },
  ]

  constructor(
    private router: Router,
    private location: Location,
    private modalCtrl: ModalController
  ) {}

  openLink(link: string) {
    console.log(this.modalCtrl.getTop())
    this.modalCtrl.dismiss({'dismissed': true});

    if (link == 'BACK' && this.location.path() != '/dashboard') {
      console.log(this.location.path());
      this.location.back();
    } else if (link == 'CART') this.openCart();
    else this.router.navigate(['/' + link]);
  }

  async openCart() {
    const modal = await this.modalCtrl.create({
      component: CartModal,
      cssClass: 'todo'
    });
    return await modal.present();
  }

}