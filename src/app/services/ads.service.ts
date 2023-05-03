import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { IAd } from '../models/ad'
import { environment } from '../../environments/environment.development'
import { ICategory } from '../models/category'

@Injectable({
  providedIn: 'root'
})
export class AdsService {
  newImageId!: object | null
  constructor(private _http: HttpClient) {
  }
// get all adverts from BD
  getAdsList() {
    return this._http.get<IAd[]>(`${environment.apiUrl}/Advert`)
  }
// get advert by ID
  getAd(id: string) {
    return this._http.get<IAd>(`${environment.apiUrl}/Advert/${id}`)
  }
// get all categories
  getCategories() {
    return this._http.get<ICategory[]>(`${environment.apiUrl}/Category`)
  }
// create new advert
  newAd(newAdData: IAd) {
    return this._http.post(`${environment.apiUrl}/Advert`,
      {
        name: newAdData.name,
        description: newAdData.description,
        categoryId: newAdData.category.id,
        imageUrl: `${environment.apiUrl}/File/${this.newImageId}`,
        price: newAdData.price,
        address: newAdData.address
    })
  }
// upload new image for advert and get id
  imageUpload(newAdImage: File) {
    const imageData = new FormData()
    imageData.append('file', newAdImage, newAdImage.name)
    return this._http.post(`${environment.apiUrl}/File`,
      imageData).subscribe((id) => this.newImageId = id)
  }
// delete target advert
  deleteAd(adId: string | undefined) {
    return this._http.delete(`${environment.apiUrl}/Advert/${adId}`)
  }
}

