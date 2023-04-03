import { Component, ElementRef, OnInit, Output } from '@angular/core'
import { DialogBoxComponent } from '../dialog-box/dialog-box.component'
import { DialogService, DynamicDialogComponent, DynamicDialogModule } from 'primeng/dynamicdialog'
import { Router } from '@angular/router'
import { SignInComponent } from '../../../services/user/sign-in/sign-in.component'
import { SignUpComponent } from '../../../services/user/sign-up/sign-up.component'
import { UserMenuComponent } from '../user-menu/user-menu.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean = true


  constructor(




    // public dialogService: DialogService,
    public dialogService: DialogService,
    private router: Router
  ) {
  }


  userBtnText: string = 'Войти'

  onNewAdBtnClick() {
    if (this.loggedIn) {
      this.router.navigate(['new-ad']).then()
    } else {
      this.dialogService.open(SignUpComponent, {
        header: 'Регистрация'
      })
    }
  }


  userMenu() {
    console.log('open')
  }

  showLoginModal() {
    if (this.loggedIn) {
       this.userMenu()

    } else {
      this.dialogService.open(SignUpComponent, {
        header: 'Регистрация'
      })
    }

  }

  ngOnInit() {
    (this.loggedIn ? this.userBtnText = 'Алексей' : this.userBtnText = 'Войти')
  }

  // visible!: boolean;
  //
  // showDialog() {
  //   this.visible = true;
  //
  // }

}


