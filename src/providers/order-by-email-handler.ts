import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { CartHandler } from './cart-handler';

@Injectable()
export class OrderByEmailHandler {

  private email = "sandorclegane34@yahoo.gr";
  private api = "https://formspree.io/f/mdoppbed"

  constructor(
    private emailComposer: EmailComposer,
    private http: HttpClient
  ) { 

  }

  public sendOrderEmail(
    customerInfo: {
      name: string,
      surname: string,
      phone: string,
      city: string,
      regUnit: string,
      zip: string,
      street: string,
      number: string,
      email: string
    },
    products: string
  ) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post(this.api,
      { 
        FULL_NAME: customerInfo.name + ' ' + customerInfo.surname, 
        ADDRESS: customerInfo.street + ' ' + customerInfo.number + ', ' + customerInfo.city + ' (' + customerInfo.regUnit + '), ' + customerInfo.zip,
        PHONE: customerInfo.phone,
        EMAIL: customerInfo.email,
        PURCHASE: products

      },
      { 'headers': headers }).subscribe(
        response => {
          console.log(response);
        }
      );

  }

}