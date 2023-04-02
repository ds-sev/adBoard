import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog'
import { SignInComponent } from './services/user/sign-in/sign-in.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public dialogService!: DialogService

  // constructor(public dialogService: DialogService) {
  //   this.dialogService.open(SignInComponent, {
  //     header: 'hello'
  //   })
  // }
  title = 'adBoard';
}
