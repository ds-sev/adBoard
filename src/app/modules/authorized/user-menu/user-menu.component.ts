import { Component, OnInit } from '@angular/core'
import { MenuItem, MessageService } from 'primeng/api'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { AuthService } from '../../../services/auth.service'
import { Router } from '@angular/router'
import { SignInComponent } from '../../guest/components/sign-in/sign-in.component'

@Component({
  selector: 'user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  providers: [MessageService]
})
export class UserMenuComponent implements OnInit {
  items!: MenuItem[]

  name: string | null = localStorage.getItem('userName')
  visible!: boolean
  isLoggedIn$ = this._auth.user$

  private _dialogRef!: DynamicDialogRef

  constructor(
    private router: Router,
    private _auth: AuthService,
    public dialogService: DialogService,
  ) {
  }

  logOut() {
    this.visible = true
  }

  onLoginBtnClick() {
    this._dialogRef = this.dialogService.open(SignInComponent, {
      header: 'Войти',
      modal: true,
      dismissableMask: true
    })
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Мои объявления',
        routerLink: 'my-ads'
      },
      {
        label: 'Настройки',
        routerLink: 'settings'
      },
      {
        label: 'Выйти',
        command: () => this.logOut()
      }
    ]
  }

  onConfirmBtnClick() {
    this._auth.signOut()
    this.router.navigate(['home']).then()
    this._auth.getAuthStatus()
    this.visible = false
  }
}

