import { Component } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent {
  name: string = 'Алексей'
  phone: number = 978
  checkVisible: string = 'display: flex'
}
