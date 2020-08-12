import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GoogleDriveHandler {
  data: any = null;
  private sheet = 3;

  constructor(public http: HttpClient) { }

  public getProducts(sheet: number) {
    const url = `https://spreadsheets.google.com/feeds/cells/1iPS-nAjwo8tmOk6kyBGxbctByRCoCI7FISqZxkQufFk/${sheet}/public/full?alt=json`;
    let products = [];
    this.http.get(url).subscribe(data => {
      for(let i=0; i<(data.feed.entry.length)/4; i++) {
        products.push(
          {
            name: data.feed.entry[(i*4) + 0].content.$t,
            pricePerWeight: data.feed.entry[(i*4) + 1].content.$t,
            pricePerPiece: data.feed.entry[(i*4) + 2].content.$t,
            image: data.feed.entry[(i*4) + 3].content.$t
          }
        )
      }
    })
    return products;
  }
}

