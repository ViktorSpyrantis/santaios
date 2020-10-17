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
  // FIXME : DELET MAYBE IF USELESS
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
        product: JSON.stringify(this.product)
        // name: this.product.name,
        // image: this.product.image,
        // price: this.product.pricePerWeight
      }
    };
    this.router.navigate(['/product'], navigationExtras)
  }
}
