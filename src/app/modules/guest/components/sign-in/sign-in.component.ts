import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { SignUpComponent } from '../sign-up/sign-up.component'
import { AuthService } from '../../../../services/auth.service'
import { first } from 'rxjs'
import { Router } from '@angular/router'
import { AlertService } from '../../../../services/alert.service'
import { error } from '@angular/compiler-cli/src/transformers/util'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup
  submitted = false
  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private dialogService: DialogService,
    private readonly _dialogRef: DynamicDialogRef,
    private _authService: AuthService,
    private _alertService: AlertService
  ) {
  }

  ngOnInit() {
    this.signInForm = this._formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get form() { return this.signInForm.controls  }

  isLogin: boolean = false

  isForgetModalOpen: boolean = false

  @Output() registerClick = new EventEmitter()

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
    this.submitted = true
    this._alertService.clear()

    if (this.signInForm.invalid) {
      return
    }

    this._authService.login(this.form['login'].value, this.form['password'].value )
    .pipe(first())
    .subscribe({
      next: () => {
        this._router.navigate(['home']).then()
        this._dialogRef.close()
      },

      error: error => {
        this._alertService.error(error)
      }

    })

    // this._dialogRef.close()
    // console.log(this.form['login'].value, this.form['password'].value)
  }

  show() {
    this.isForgetModalOpen = true
  }

}
