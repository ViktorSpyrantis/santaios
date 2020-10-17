import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { GoogleDriveHandler, Files } from 'src/providers/googleDriveHandler';
import { ProductCategories } from 'src/providers/product-categories';
import { ProductCategoriesEnum } from 'src/providers/product-categories-enum';
import { ProductSheet } from 'src/providers/productSheets'

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html',
  styleUrls: ['dashboard.scss'],
})
export class Dashboard {
  loadingComplete: boolean = false;

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
  bgImage: string = "assets/img/bg.png"
  logoBg: string = "assets/icon/logo_bg.svg"

  constructor(
    private router: Router,
    private driveHandler: GoogleDriveHandler,
  ) {

  }

  ngOnInit() {
    this.initLists();
    console.log('SUGGESTED PRODUCTS: ', this.suggestedProducts)
  }

  // FIXME : DELET MAYBE
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

}
