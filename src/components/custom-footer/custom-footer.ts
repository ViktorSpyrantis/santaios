import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
      id: "like",
      link: "",
      icon: "assets/icon/heart_white.svg"
    },
    {
      id: "cart",
      link: "",
      icon: "assets/icon/shopping_cart.svg"
    },
    {
      id: "home",
      link: "dashboard",
      icon: "assets/icon/home.svg"
    },
    {
      id: "expand",
      link: "",
      icon: "TODO"
    },
    {
      id: "logo",
      link: "dashboard",
      icon: "assets/icon/logo_small.svg"
    },
  ]

  constructor(
    private router: Router,
  ) {}

  openLink(link: string) {
    this.router.navigate(['/' + link]);
  }
}