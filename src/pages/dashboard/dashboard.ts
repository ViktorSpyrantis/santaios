import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html',
  styleUrls: ['dashboard.scss'],
})
export class Dashboard {

  categoryList = [];
  private productsList = productCategories;
  bgImage: string = "assets/img/bg.png"
  loadingComplete = false;

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
    this.initCategoryList();
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

  private initCategoryList() {
    this.categoryList = [
      {
        id: 'BEEF',
        greek: 'ΜΟΣΧΑΡΙΣΙΟ',
        icon: 'cow.svg',
        icon_by_height: true
      },
      {
        id: 'PORK',
        greek: 'ΧΟΙΡΙΝΟ',
        icon: 'pig.svg',
        icon_by_height: true
      },
      {
        id: 'CHICKEN',
        greek: 'ΚΟΤΟΠΟΥΛΟ',
        icon: 'chicken.svg',
        icon_by_height: false
      },
      {
        id: 'LAMB',
        greek: 'ΑΜΝΟΕΡΙΦΙΑ',
        icon: 'lamb.svg',
        icon_by_height: true
      },
      {
        id: 'PREPARATIONS',
        greek: 'ΠΑΡΑΣΚΕΥΑΣΜΑΤΑ',
        icon: 'kebab.svg',
        icon_by_height: false
      },
      {
        id: 'DRY_AGED',
        greek: 'DRY AGED',
        icon: 'steak.svg',
        icon_by_height: true
      }
    ];

    this.categoryList.forEach(cat => {
      cat.icon = 'assets/icon/' + cat.icon;
    })
    this.loadingComplete = true;
  }
}



export enum productCategories {
  BEEF = 'BEEF',
  PORK = 'PORK',
  CHICKEN = 'CHICKEN',
  LAMB = 'LAMB',
  PREPARATIONS = 'PREPARATIONS',
  DRY_AGED = 'DRY_AGED'
}


