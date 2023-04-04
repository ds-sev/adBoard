import { Injectable } from '@angular/core'

import { HttpClient } from '@angular/common/http'
import { IAd } from '../models/ad'

@Injectable({
  providedIn: 'root'
})
export class AdsService {
  url: string = 'https://fakestoreapi.com/products?limit=5'

  constructor(private _http: HttpClient) {
  }

  getAdsList() {
    return this._http.get<IAd[]>(this.url)
  }

  getAd(id: number) {
    return this._http.get<IAd>(`$(this.url)/${id}`)
  }
}




