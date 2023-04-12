import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { DialogService } from 'primeng/dynamicdialog'
import { Router } from '@angular/router'
import { MessageService } from 'primeng/api'
import { SignUpComponent } from '../../modules/guest/components/sign-up/sign-up.component'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [MessageService]
})
export class HeaderComponent implements OnInit {



  loggedIn: boolean = false

  @Output() newAdBtnClick = new EventEmitter()

  visible: string = ''
  items: any = ['one', 'two', 'three']

  constructor(
    public dialogService: DialogService,
    private router: Router,
    private _auth: AuthService
  ) {
  }

  setLoginStatus() {
    localStorage.setItem('isLogin', 'true')
  }
  isLogin: any = localStorage.getItem('isLogin')

  userBtnText: string = 'Войти'

  onNewAdBtnClick() {
    // this.setLoginStatus()
    // localStorage.setItem('isLogin', 'false')

    if (localStorage.getItem('isLogin') === 'true') {
      this.router.navigate(['new-ad']).then()
    } else {
      // this.dialogService.open(SignUpComponent, {
      //   header: 'Регистрация'
      //
      // })
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
    console.log('open')
  }

  showLoginModal() {
    if (this.loggedIn) {
      this.userMenu()
    } else {
      // this.dialogService.open(SignUpComponent, {
      //   header: 'Регистрация'
      // })
    }
  }

  ngOnInit() {
    (this.loggedIn ? this.userBtnText = 'Алексей' : this.userBtnText = 'Войти')
  }
}


