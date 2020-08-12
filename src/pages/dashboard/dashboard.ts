import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { GoogleDriveHandler } from 'src/providers/googleDriveHandler';
import { ProductCategories } from 'src/providers/productCategories';
import { ProductSheet } from 'src/providers/productSheets'

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html',
  styleUrls: ['dashboard.scss'],
})
export class Dashboard {

  categoryList = [];
  // private productsList = ProductCategories;
  bgImage: string = "assets/img/bg.png"
  loadingComplete = false;

  constructor(
    private router: Router,
    private driveHandler: GoogleDriveHandler
  ) {

  }

  ngOnInit() {
    this.initCategoryList();
  }

  openCategory(categoryName: string) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        sheet: categoryName
      }
    };
    this.router.navigate(['/category'], navigationExtras)
  }

  private initCategoryList() {
    this.categoryList = [
      {
        id: ProductSheet.BEEF,
        greek: 'ΜΟΣΧΑΡΙΣΙΟ',
        icon: 'cow.svg',
        icon_by_height: true
      },
      {
        id: ProductSheet.PORK,
        greek: 'ΧΟΙΡΙΝΟ',
        icon: 'pig.svg',
        icon_by_height: true
      },
      {
        id: ProductSheet.CHICKEN,
        greek: 'ΚΟΤΟΠΟΥΛΟ',
        icon: 'chicken.svg',
        icon_by_height: false
      },
      {
        id: ProductSheet.LAMB,
        greek: 'ΑΜΝΟΕΡΙΦΙΑ',
        icon: 'lamb.svg',
        icon_by_height: true
      },
      {
        id: ProductSheet.PREPARATIONS,
        greek: 'ΠΑΡΑΣΚΕΥΑΣΜΑΤΑ',
        icon: 'kebab.svg',
        icon_by_height: false
      },
      {
        id: ProductSheet.DRY_AGED,
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
