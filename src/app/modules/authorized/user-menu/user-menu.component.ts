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

  private _dialogRef!: DynamicDialogRef

  name: string | null = localStorage.getItem('userName')
  visible!: boolean

  constructor(
    private router: Router,
    private _auth: AuthService,
    private messageService: MessageService,
    public dialogService: DialogService,
  ) {
    // this._auth.user$.subscribe(value => console.log(value))
  }

  isLoggedIn$ = this._auth.user$

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

  // update() {
  //   this.messageService.add({severity: 'success', summary: 'Success', detail: 'Data Updated'})
  // }
  //
  // delete() {
  //   this.messageService.add({severity: 'warn', summary: 'Delete', detail: 'Data Deleted'})
  // }

  onConfirmBtnClick() {
    this._auth.signOut()
    this.router.navigate(['home']).then()
    this._auth.getAuthStatus()
    this.visible = false
  }
}

