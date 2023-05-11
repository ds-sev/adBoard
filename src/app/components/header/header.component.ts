import { Component } from '@angular/core'
import { DialogService } from 'primeng/dynamicdialog'
import { Router } from '@angular/router'
import { MessageService } from 'primeng/api'
import { SignUpComponent } from '../../modules/guest/components/sign-up/sign-up.component'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [MessageService]
})
export class HeaderComponent{
  constructor(
    public dialogService: DialogService,
    private router: Router,
    private _auth: AuthService
  ) {
  }

  onNewAdBtnClick() {
    if (this._auth.userValue !== null) {
      this.router.navigate(['new-ad']).then()
    } else {
      this.dialogService.open(SignUpComponent, {
        header: 'Регистрация',
        modal: true,
        dismissableMask: true
      })
    }
  }
}
