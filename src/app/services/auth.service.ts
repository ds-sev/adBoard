import { Injectable, OnInit } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {
  }

  // isLogin!: boolean

  saveUserData(userName: string) {
    localStorage.setItem('userName', userName)
    localStorage.setItem('isLogin', 'true')
  }

  getAuthStatus() {
    return localStorage.getItem('isLogin')
  }

  getUserName() {
    localStorage.getItem('UserName')
  }

  signOut(userName: string) {
    localStorage.removeItem('isLogin')
  }



}
