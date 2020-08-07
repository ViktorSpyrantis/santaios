import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'category-page',
  templateUrl: 'category-page.html',
  styleUrls: ['category-page.scss'],
})
export class CategoryPage {
  
  data: any;

  constructor(
    private route: ActivatedRoute, 
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
        console.log(this.data)
      }
    });
  }

  
}
