import { Component, Input } from '@angular/core';

@Component({
  selector: 'category-button',
  templateUrl: 'category-button.html',
  styleUrls: ['category-button.scss'],
})
export class CategoryButton {

  @Input() name: string;

  constructor(
  ) {}

  
}
