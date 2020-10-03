import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleDriveHandler } from 'src/providers/googleDriveHandler';
import { ProductCategories } from 'src/providers/productCategories';

@Component({
  selector: 'category-page',
  templateUrl: 'category-page.html',
  styleUrls: ['category-page.scss'],
})
export class CategoryPage {
  
  title: string;
  private category: any;
  private columns: number = 2;
  private products = [];
  private rowList = [];
  private sheetNumber: number;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private driveHandler: GoogleDriveHandler
  ) {
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.sheetNumber = params.sheet;
        this.products = this.driveHandler.getProducts(this.sheetNumber);
        console.log("PRODUCTS RETURNED: ", this.products);
      }
    });
  }

  // private populateRowList() {
  //   this.rowList = [];
  //   for(let i=0; i < )
  // }
}

