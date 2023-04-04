import { Component, Input, OnInit } from '@angular/core'
import { MenuItem, MessageService } from 'primeng/api'
import { DialogService } from 'primeng/dynamicdialog'
import { ModalConfirmComponent } from '../modals/modal-confirm/modal-confirm.component'

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

  @Input() public loggedIn: boolean = false

  constructor(private messageService: MessageService, public dialogService: DialogService) {
  }

  logOut() {
    this.dialogService.open(ModalConfirmComponent, {
      header: 'Вы уверены?'
    })
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
}
