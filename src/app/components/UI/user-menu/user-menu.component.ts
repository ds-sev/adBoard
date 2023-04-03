import { Component, Input, OnInit } from '@angular/core'
import { MenuItem, MessageService } from 'primeng/api'

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

  constructor(private messageService: MessageService) {
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
        routerLink: 'log-out'
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
