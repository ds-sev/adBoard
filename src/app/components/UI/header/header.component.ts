import { Component, OnInit } from '@angular/core'
import { DialogService } from 'primeng/dynamicdialog'
import { Router } from '@angular/router'
import { SignUpComponent } from '../sign-up/sign-up.component'
import { MessageService } from 'primeng/api'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [MessageService]
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean = true
  visible: string = ''
  items: any = ['one', 'two', 'three']

  constructor(
    public dialogService: DialogService,
    private router: Router
  ) {
  }

  userBtnText: string = 'Войти'

  onNewAdBtnClick() {
    if (this.loggedIn) {
      this.router.navigate(['new-ad']).then()
    } else {
      this.dialogService.open(SignUpComponent, {
        header: 'Регистрация'
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
      this.dialogService.open(SignUpComponent, {
        header: 'Регистрация'
      })
    }
  }

  ngOnInit() {
    (this.loggedIn ? this.userBtnText = 'Алексей' : this.userBtnText = 'Войти')
  }
}


