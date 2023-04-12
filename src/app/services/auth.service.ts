import { Injectable, OnInit } from '@angular/core'
import { BehaviorSubject, map, Observable } from 'rxjs'
import { __values } from 'tslib'
import { User } from '../models/user'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userSubject: BehaviorSubject<User | null>
  public user: Observable<User | null>


  constructor(
    private _router: Router,
    private _http: HttpClient
  ) {
    // console.log(this.authStatus$)
    this._userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!))
    this.user = this._userSubject.asObservable()
  }

  public get userValue() {
    return this._userSubject.value
  }

  login(email: string, password: string) {
    return this._http.post<User>('http://80.90.184.170:5000/Account/login', {email, password})
    .pipe(map(user => {
      localStorage.setItem('user', JSON.stringify(user))
      this._userSubject.next(user)
      return user
      })
      )
  }

  register(user: User) {
    return this._http.post(`${environment}/Account/register`, user)
  }

  // isLogin!: boolean

  saveUserData(userName: string) {
    localStorage.setItem('userName', userName)
    localStorage.setItem('isLogin', 'true')
  }

  getAuthStatus() {
    return localStorage.getItem('isLogin') === 'true';
  }

  getUserName() {
    localStorage.getItem('UserName')
  }

  signOut(userName: string) {
    localStorage.removeItem('user')
    this._userSubject.next(null)
    this._router.navigate(['home']).then()

  }



}
