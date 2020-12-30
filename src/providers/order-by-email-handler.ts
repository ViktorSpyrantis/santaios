import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Injectable()
export class OrderByEmailHandler {

  private api = "https://mailthis.to/sandorclegane34@yahoo.gr";

  constructor(
    private emailComposer: EmailComposer,
    private http: HttpClient
  ) { 

  }

  public sendOrder() {
    const email = "sandorclegane34@yahoo.gr";
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://formspree.io/f/mdoppbed',
      { 
        address: "viktor", 
        phone: email,
        email: "", 
        message: "message" 
      },
      { 'headers': headers }).subscribe(
        response => {
          console.log(response);
        }
      );

  }

}