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
  loadingComplete: boolean = false;

  categoryList = [];

  suggestedProductsTitle = "Προτεινόμενα  προϊόντα"
  suggestedProducts: {
    name: string,
    pricePerWeight: string,
    pricePerPiece: string,
    image: string,
  }[];

  weeklyOffersTitle = "Προσφορές εβδομάδος";
  weeklyOffers: {
    name: string,
    pricePerWeight: string,
    pricePerPiece: string,
    image: string,
  }[];
  // private productsList = ProductCategories;
  bgImage: string = "assets/img/bg.png"
  logoBg: string = "assets/icon/logo_bg.svg"

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
    this.suggestedProducts = this.driveHandler.getProductCardInfo(Files.SUGGESTED);
    this.weeklyOffers = this.driveHandler.getProductCardInfo(Files.WEEK_OFFERS);
    this.loadingComplete = true;
  }

  private initCategoryList() {
    this.categoryList = [
      {
        id: ProductSheet.BEEF,
        greek: 'ΜΟΣΧΑΡΙΣΙΟ',
        page_title: 'Μοσχαρίσια κρέατα',
        icon: 'cow.svg',
        icon_by_height: true
      },
      {
        id: ProductSheet.PORK,
        greek: 'ΧΟΙΡΙΝΟ',
        page_title: 'Χοιρινά κρέατα',
        icon: 'pig.svg',
        icon_by_height: true
      },
      {
        id: ProductSheet.CHICKEN,
        greek: 'ΚΟΤΟΠΟΥΛΟ',
        page_title: 'Κρέας κοτόπουλου',
        icon: 'chicken.svg',
        icon_by_height: false
      },
      {
        id: ProductSheet.LAMB,
        greek: 'ΑΜΝΟΕΡΙΦΙΑ',
        page_title: 'Κατσικίσια κρέατα',
        icon: 'sheep.svg',
        icon_by_height: true
      },
      {
        id: ProductSheet.PREPARATIONS,
        greek: 'ΠΑΡ/ΑΣΜΑΤΑ',
        page_title: 'Παρασκευάσματα',
        icon: 'kebab.svg',
        icon_by_height: false
      },
      {
        id: ProductSheet.DRY_AGED,
        greek: 'DRY AGED',
        page_title: 'Dry aged',
        icon: 'steak.svg',
        icon_by_height: true
      }
    ];

    this.categoryList.forEach(cat => {
      cat.icon = 'assets/icon/' + cat.icon;
    })
  }
}
