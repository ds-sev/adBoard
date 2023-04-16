import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { DialogService } from 'primeng/dynamicdialog'
import { Router } from '@angular/router'
import { MessageService } from 'primeng/api'
import { SignUpComponent } from '../../modules/guest/components/sign-up/sign-up.component'
import { AuthService } from '../../services/auth.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [MessageService]
})
export class HeaderComponent implements OnInit {


  public isLogin$!: Observable<boolean>

  loggedIn: boolean = true

  @Output() newAdBtnClick = new EventEmitter()

  visible: string = ''
  items: any = ['one', 'two', 'three']

  constructor(
    public dialogService: DialogService,
    private router: Router,
    private _auth: AuthService
  ) {

    // console.log(this.isLogin$)

  }

  setLoginStatus() {
    localStorage.setItem('isLogin', 'true')
  }

  // isLogin: any = localStorage.getItem('isLogin')

  userBtnText!: string

  onNewAdBtnClick() {
    if (this._auth.userValue === null) {
      this.router.navigate(['new-ad']).then()
    } else {
      this.newAdBtnClick.emit()
      this.dialogService.open(SignUpComponent, {
        header: 'Регистрация',
        modal: true,
        dismissableMask: true
      })
    }
  }

  userMenu() {
    this.visible = 'display: flex'
  }

  showLoginModal() {
    if (this.loggedIn) {
      this.userMenu()
    } else {
    }
  }

  ngOnInit() {

    if (this._auth.getAuthStatus()) {

    } else {
      this.userBtnText = 'Войти'

    }
  }
}


