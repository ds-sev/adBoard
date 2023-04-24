import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { IAd } from '../models/ad'
import { environment } from '../../environments/environment.development'
import { Observable } from 'rxjs'
import { ICategory } from '../models/category'

@Injectable({
  providedIn: 'root'
})
export class AdsService {
  constructor(private _http: HttpClient) {
  }

  getAdsList() {
    return this._http.get<IAd[]>(`${environment.apiUrl}/Advert`)
  }

  getAd(id: string) {
    return this._http.get<IAd>(`${environment.apiUrl}/Advert/${id}`)
  }

  getCategories() {
    return this._http.get<ICategory[]>(`${environment.apiUrl}/Category`)
  }

  newAd(newAdData: IAd) {
    // const formData = new FormData()
    // if (newAdData.imageUrl) {
    //   formData.append('imageUrl', newAdData.imageUrl)
    // }
    // formData.append('name', newAdData.name)
    // formData.append('description', newAdData.description)
    // // @ts-ignore
    // formData.append('price', newAdData.price)
    // formData.append('address', newAdData.address)

    return this._http.post(`${environment.apiUrl}/Advert`,
      {
        "name": newAdData.name,
        "description": newAdData.description,
        "categoryId": newAdData.category.id,
        "price": newAdData.price,
        "address": newAdData.address
    })
  }

  deleteAd(adId: string | undefined) {
    return this._http.delete(`${environment.apiUrl}/Advert/${adId}`)
  }

  // getAdDetails() {
  //   return this._http.get<IAd>()
  // }
}

