import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GoogleDriveHandler {
  // FIXME : I added a workaround on the get product fns here(let _data: any = data). Find a better solution

  private sheet = 3;

  constructor(public http: HttpClient) { }

  public getProducts(sheet: number) {
    const url = `https://spreadsheets.google.com/feeds/cells/1iPS-nAjwo8tmOk6kyBGxbctByRCoCI7FISqZxkQufFk/${sheet}/public/full?alt=json`;
    let products = [];
    this.http.get(url).subscribe(data => {
      let _data: any = data;
      for(let i=0; i<(_data.feed.entry.length)/4; i++) {
        products.push(
          {
            product: {
              name: _data.feed.entry[(i*4) + 0].content.$t,
              pricePerWeight: _data.feed.entry[(i*4) + 1].content.$t,
              pricePerPiece: _data.feed.entry[(i*4) + 2].content.$t,
              image: _data.feed.entry[(i*4) + 3].content.$t
            }
          }
        )
      }
    })
    return products;
  }
  
  public getProductCardInfo(file: Files): any {
    let products = [];
    this.http.get('https://spreadsheets.google.com/feeds/cells/1iPS-nAjwo8tmOk6kyBGxbctByRCoCI7FISqZxkQufFk/3/public/full?alt=json').subscribe(data => {
      let _data: any = data;
      for(let i=0; i<(_data.feed.entry.length)/4; i++) {
        products.push(
          {
            product: {
              name: _data.feed.entry[(i*4) + 0].content.$t,
              pricePerWeight: _data.feed.entry[(i*4) + 1].content.$t,
              pricePerPiece: _data.feed.entry[(i*4) + 2].content.$t,
              // image: _data.feed.entry[(i*4) + 3].content.$t
              image: "assets/img/test_raw_meat.png"
            }
          }
        )
      }
    })
    return products;
  }
}

export enum Files {
  SUGGESTED = 'https://spreadsheets.google.com/feeds/cells/1iPS-nAjwo8tmOk6kyBGxbctByRCoCI7FISqZxkQufFk/3/public/full?alt=json',
  WEEK_OFFERS = 'https://spreadsheets.google.com/feeds/cells/1iPS-nAjwo8tmOk6kyBGxbctByRCoCI7FISqZxkQufFk/3/public/full?alt=json'
}

