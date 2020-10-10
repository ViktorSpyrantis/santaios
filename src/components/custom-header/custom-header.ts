import { Component } from '@angular/core';

@Component({
  selector: 'custom-header',
  templateUrl: 'custom-header.html',
  styleUrls: ['custom-header.scss']
})
export class CustomHeader {

  logo: string = "assets/icon/logo_no_letters.svg";

  constructor() {}
}