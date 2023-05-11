import { Injectable } from '@angular/core';
import { ILocalUserData } from '../models/local-user-data'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userInfo!: ILocalUserData


  saveInfo(data: ILocalUserData) {
    this.userInfo = {
      login: data.login,
      phone: data.phone,
      address: data.address
    }
    localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
  }

  getInfo() {
    // return JSON.parse(localStorage.getItem('userInfo'))
  }
}
