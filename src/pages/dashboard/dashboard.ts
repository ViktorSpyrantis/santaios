import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html',
  styleUrls: ['dashboard.scss'],
})
export class Dashboard {

  private categoryList = Object.values(productCategories);
  private productsList = productCategories;
  private bgImage: string = "assets/img/bg_image.png"

  constructor(
    private router: Router
  ) {

  }

  openCategory(categoryName: string) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        category: JSON.stringify(categoryName)
      }
    };
    console.log(navigationExtras)
    this.router.navigate(['/category'], navigationExtras)
  }

}

export enum productCategories {
  BEEF = 'ΜΟΣΧΑΡΙΣΙΟ',
  PORK = 'ΧΟΙΡΙΝΟ',
  CHICKEN = 'ΚΟΤΟΠΟΥΛΟ',
  LAMB = 'ΑΜΝΟΕΡΙΦΙΑ',
  PREPARATIONS = 'ΠΑΡΑΣΚΕΥΑΣΜΑΤΑ',
  DRY_AGED = 'DRY AGED'
}


