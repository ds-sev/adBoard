import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { IAd } from '../models/ad'
import { environment } from '../../environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class AdsService {
  constructor(private _http: HttpClient) {
  }

  getAdsList() {
    return this._http.get<IAd[]>(`${environment.apiUrl}/Advert`)
  }

  getAd(id: number) {
    return this._http.get<IAd>(`${environment.apiUrl}/${id}`)
  }
}

