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

    console.log(this.getAdsList())

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

  newAd() {
    // const formData = new FormData()
    // if (newAdData.imageUrl) {
    //   formData.append('imageUrl', newAdData.imageUrl)
    // }
    // formData.append('name', newAdData.name)
    // formData.append('description', newAdData.description)
    // // @ts-ignore
    // formData.append('price', newAdData.price)
    // formData.append('address', newAdData.address)

    return this._http.post<IAd>(`${environment.apiUrl}/Advert`, {
      "name": "test",
      "description": "test description",
      "categoryId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "imageUrl": "https://avatars.dzeninfra.ru/get-zen_doc/3323992/pub_6228b62712a9546b1fb891a3_6228c4516fb7261f1984ea56/scale_1200",
      "price": 333,
      "address": "г. Севастополь"
    })
  }

  // getAdDetails() {
  //   return this._http.get<IAd>()
  // }
}

