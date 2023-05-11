import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ICategory } from '../models/category'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private _http: HttpClient) {
  }

  getCategoriesList() {
    return this._http.get<ICategory[]>(`${environment.apiUrl}/Category`)
  }

  getCategoryInfo(id: string) {
    return this._http.get<ICategory>(`${environment.apiUrl}/Category/${id}`)
  }
}



