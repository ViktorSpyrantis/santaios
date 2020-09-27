import { Component } from '@angular/core';

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

  constructor() {}
}