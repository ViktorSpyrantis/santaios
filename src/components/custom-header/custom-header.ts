import { Component } from '@angular/core';

@Component({
  selector: 'custom-header',
  templateUrl: 'custom-header.html',
  styleUrls: ['custom-header.scss']
})
export class CustomHeader {

  headerTitle1: string = 'ΚΡΕΑΤΑΓΟΡΑ ';
  headerTitle2: string = 'Ο ΣΑΝΤΑΙΟΣ';
  logo: string = "assets/icon/logo_2.png";

  constructor() {}
}