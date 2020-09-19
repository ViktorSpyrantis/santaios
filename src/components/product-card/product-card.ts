import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: 'product-card.html',
  styleUrls: ['product-card.scss'],
})
export class ProductCard {

  private likeIcon: string = "assets/icon/heart.svg";
  private weightText: string = "το κιλό";

  @Input() name: string;
  @Input() image: string;
  // @Input() weight: string;
  @Input() price: string;


  constructor(
  ) {}

  
}
