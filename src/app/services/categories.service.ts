import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ICategory } from '../models/category'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url: string = 'http://80.90.184.170:5000/Category'

  constructor(private _http: HttpClient) {
  }

  getCategoriesList() {
    return this._http.get<ICategory[]>(this.url)
  }

  getCategory(id: number) {
    return this._http.get<ICategory>(`$(this.url)/${id}`)
  }

}


