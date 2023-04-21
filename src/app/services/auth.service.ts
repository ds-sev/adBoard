import { Injectable } from '@angular/core'
import { BehaviorSubject, map, Observable } from 'rxjs'
import { User } from '../models/user'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userSubject: BehaviorSubject<User | null>
  public user$: Observable<User | null>
  public userName!: string

  constructor(
    private _router: Router,
    private _http: HttpClient
  ) {

    this._userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!))
    this.user$ = this._userSubject.asObservable()


  }

  public get userValue() {
    return this._userSubject.value
  }

  login(login: string, password: string) {
    localStorage.setItem('userName', login)
    return this._http.post<User>(`${environment.apiUrl}/Account/login`, {login, password})
    .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user))
        this._userSubject.next(user)
        return user
      })
    )
  }

  register(user: User) {
    return this._http.post(`${environment.apiUrl}/Account/register`, user)
  }

  // saveUserData(userName: string) {
  //   localStorage.setItem('userName', userName)
  //   localStorage.setItem('isLogin', 'true')
  // }

  getAuthStatus() {
    return localStorage.getItem('isLogin') === 'true'
  }

  getUserName() {
    localStorage.getItem('userName')
  }

  signOut() {
    localStorage.removeItem('user')
    this._userSubject.next(null)
    this._router.navigate(['home']).then()
  }
}
