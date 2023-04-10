import { Component, OnInit } from '@angular/core'
import { DialogService } from 'primeng/dynamicdialog'
import { Router } from '@angular/router'
import { SignUpComponent } from '../../modules/guest/modals/sign-up/sign-up.component'
import { MessageService } from 'primeng/api'
import {
  SignModalComponent,
  SignModalComponentModule
} from '../../modules/guest/modules/sign-modal/sign-modal.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [MessageService]
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean = false

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
      // this.dialogService.open(SignUpComponent, {
      //   header: 'Регистрация'
      //
      // })
      this.dialogService.open(SignModalComponent, {
        header: 'dss'
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


