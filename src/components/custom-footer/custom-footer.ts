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

  // FIXME : Remove the comments later
  columnArray = [
    // {
    //   id: "like",
    //   link: "",
    //   icon: "assets/icon/heart_white.svg"
    // },
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
    // {
    //   id: "expand",
    //   link: "",
    //   icon: "TODO"
    // },
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

  // FIXME : fix things here 
  openLink(link: string) {
    // try {
      console.log(this.modalCtrl);
      this.modalCtrl.dismiss({'dismissed': true});
    // } catch(err){}

    if(link == 'BACK') this.location.back();
    else if (link == 'CART') this.openCart();
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