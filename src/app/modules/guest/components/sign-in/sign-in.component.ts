import { Component, EventEmitter, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { SignUpComponent } from '../sign-up/sign-up.component'
import { AuthService } from '../../../../services/auth.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor(
    private dialogService: DialogService,
    private readonly _dialogRef: DynamicDialogRef,
    private _auth: AuthService
  ) {
  }

  isLogin: boolean = false

  btnText = 'Войти'

  isForgetModalOpen: boolean = false

  @Output() registerClick = new EventEmitter()

  signInForm = new FormGroup({

    phone: new FormControl<any>(null, Validators.required),
    password: new FormControl<any>(null, Validators.required)
  })
  loggedIn!: boolean

  onRegisterClick() {
    this._dialogRef.close()
    this.dialogService.open(SignUpComponent, {
      header: 'Регистрация',
      modal: true,
      dismissableMask: true
    })
  }

  onSubmit() {
    if (this.signInForm.value.phone === this.signInForm.value.password.length) {
      this._auth.saveUserData(this.signInForm.value.phone)
      this.isLogin = true
      this._dialogRef.close()
    }
  }

  show() {
    this.isForgetModalOpen = true
  }

}
