import { Component } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent {
  name: string | null = localStorage.getItem('userName')
  phone: number = 978
  checkVisible: string = 'display: flex'
  address: string = 'г. Севастополь, ул Большая Морская, д 23'
}
