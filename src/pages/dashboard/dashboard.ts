import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html',
  styleUrls: ['dashboard.scss'],
})
export class Dashboard {

  constructor(
    private router: Router
  ) {

  }

  openCat() {
    console.log('kk')
    this.router.navigate(['/category'])
  }

}


