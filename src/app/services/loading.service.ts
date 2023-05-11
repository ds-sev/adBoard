import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public _loading: boolean = false

  constructor() { }

  setLoading(loading: boolean) {
    this._loading = loading
  }

  getLoading(): boolean {
    return this._loading
  }
}
