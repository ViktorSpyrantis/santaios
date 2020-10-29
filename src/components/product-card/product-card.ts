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
  @Input() dayIndex?: number;
  // FIXME : DELET MAYBE IF USELESS
  // @Input() name: string;
  // @Input() image: string;
  // @Input() price: string;
  @Input() product: any;

  day: string;
  dayIndexMap = new Map([
    [0, "Δευτέρα"],
    [1, "Τρίτη"],
    [2, "Τετάρτη"],
    [3, "Πέμπτη"],
    [4, "Παρασκευή"],
    [5, "Σάββατο"],
    [6, "Κυριακή"]
  ]); 


  constructor(
    private router: Router,
  ) {}

  openProduct() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        product: JSON.stringify(this.product)
        // name: this.product.name,
        // image: this.product.image,
        // price: this.product.price
      }
    };
    this.router.navigate(['/product'], navigationExtras)
  }
}
