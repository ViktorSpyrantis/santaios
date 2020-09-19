import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { GoogleDriveHandler, Files } from 'src/providers/googleDriveHandler';
import { ProductCategories } from 'src/providers/productCategories';
import { ProductSheet } from 'src/providers/productSheets'

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html',
  styleUrls: ['dashboard.scss'],
})
export class Dashboard {

  categoryList = [];
  suggestedProducts = [];
  // suggestedProducts: {
  //   name: string,
  //   pricePerWeight: string,
  //   pricePerPiece: string,
  //   image: string,
  // }[];
  // private productsList = ProductCategories;
  bgImage: string = "assets/img/bg.png"
  logoBg: string = "assets/icon/logo_bg.svg"
  loadingComplete = false;

  constructor(
    private router: Router,
    private driveHandler: GoogleDriveHandler
  ) {

  }

  ngOnInit() {
    this.initCategoryList();
    this.initLists();
    console.log('SUGGESTED PRODUCTS: ', this.suggestedProducts)
  }

  openCategory(categoryName: string) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        sheet: categoryName
      }
    };
    this.router.navigate(['/category'], navigationExtras)
  }

  private initLists() {
    this.suggestedProducts = this.driveHandler.getProductCardInfo(Files.SUGGESTED)
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
        icon: 'sheep.svg',
        icon_by_height: true
      },
      {
        id: ProductSheet.PREPARATIONS,
        greek: 'ΠΑΡ/ΑΣΜΑΤΑ',
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
