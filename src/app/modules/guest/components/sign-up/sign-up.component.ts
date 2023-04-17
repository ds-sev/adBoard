import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { SignInComponent } from '../sign-in/sign-in.component'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { AuthService } from '../../../../services/auth.service'
import { first } from 'rxjs'
import { AlertService } from '../../../../services/alert.service'
import { error } from '@angular/compiler-cli/src/transformers/util'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup
  submitted = false

  constructor(
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private dialogService: DialogService,
    private readonly _dialogRef: DynamicDialogRef,
    private _alertService: AlertService
  ) {
  }

  ngOnInit() {
    this.signUpForm = this._formBuilder.group({
      email: ['', Validators.required],
      login: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirm: ['', Validators.required]
    })
  }

  get form() { return this.signUpForm.controls }

  onLoginClick() {
    this._dialogRef.close()
    this.dialogService.open(SignInComponent, {
      header: 'Авторизация',
      modal: true,
      dismissableMask: true
    })
  }

  onSubmit() {
    this.submitted = true
    this._authService.register(this.signUpForm.value)
    .pipe(first())
    .subscribe({
      next: () => {
        this._alertService.success('Вы зарегистрированы', { keepAfterRouteChange: false})
        this.onLoginClick()
      },
      error: error => {
        this._alertService.error(error)
      }
    })
  }
}
