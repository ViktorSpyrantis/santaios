import { Component, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'product-card',
  templateUrl: 'product-card.html',
  styleUrls: ['product-card.scss'],
})
export class ProductCard {

  private likeIcon: string = "assets/icon/heart.svg";
  private weightText: string = "το κιλό";

  @Input() small: boolean;
  // @Input() name: string;
  // @Input() image: string;
  // @Input() price: string;
  @Input() product: any;


  constructor(
    private router: Router,
  ) {}

  openProduct() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        // productId
      }
    };
    this.router.navigate(['/category'], navigationExtras)
  }
}
