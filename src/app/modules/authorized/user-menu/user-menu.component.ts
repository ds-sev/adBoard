import { Component, Input, NgModule, OnInit } from '@angular/core'
import { MenuItem, MessageService } from 'primeng/api'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { DialogModule } from 'primeng/dialog'
import { ButtonModule } from 'primeng/button'
import { visit } from '@angular/compiler-cli/src/ngtsc/util/src/visitor'
import { AuthService } from '../../../services/auth.service'

@Component({
  selector: 'user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  providers: [MessageService]
})
export class UserMenuComponent implements OnInit {
  items!: MenuItem[]
  name: string = 'Алексей'
  btnIcon: string = ''
  visible!: boolean

  @Input() public loggedIn: boolean = false

  constructor(
    // private _dialogRef: DynamicDialogRef,
    private _auth: AuthService,
    private messageService: MessageService,
    public dialogService: DialogService) {
  }

  logOut() {
    this.visible = true
  }

  onLoginBtnClick() {

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
        command:() => this.logOut()
      }
    ]
    if (this.loggedIn) {
      this.name = 'Алексей'
      this.btnIcon = 'pi pi-angle-down'

    } else {
      this.name = 'Войти'
      this.btnIcon = ''
    }
  }

  update() {
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Data Updated'})
  }

  delete() {
    this.messageService.add({severity: 'warn', summary: 'Delete', detail: 'Data Deleted'})
  }

  onConfirmBtnClick() {
    this._auth.signOut('isLogin')
    this.visible = false
  }

}

