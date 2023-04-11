import { Component, EventEmitter, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { SignUpComponent } from '../sign-up/sign-up.component'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor(
    private dialogService: DialogService,
    private readonly _dialogRef: DynamicDialogRef
  ) {
  }

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
    if (this.signInForm.value.phone === 1) {
    }
  }

  show() {
    this.isForgetModalOpen = true
  }

}
