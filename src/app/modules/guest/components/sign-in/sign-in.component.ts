import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { SignUpComponent } from '../sign-up/sign-up.component'
import { AuthService } from '../../../../services/auth.service'
import { first } from 'rxjs'
import { Router } from '@angular/router'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup
  submitted = false
  isBtnActive!: boolean

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private dialogService: DialogService,
    private readonly _dialogRef: DynamicDialogRef,
    private _authService: AuthService,
  ) {}

  ngOnInit() {
    this.signInForm = this._formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    })

    this.signInForm.valueChanges.subscribe(value => {
      if (value.login === '' || value.password === '') {
        return this.isBtnActive = true
      }
      return this.isBtnActive = false
    })
  }

  get form() {
    return this.signInForm.controls
  }

  isLogin: boolean = false
  isForgetModalOpen: boolean = false
  loggedIn!: boolean
  @Output() registerClick = new EventEmitter()

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

    if (this.signInForm.invalid) {
      return
    }

    this._authService.login(this.form['login'].value, this.form['password'].value)
    .pipe(first())
    .subscribe({
      next: () => {
        this._router.navigate(['home']).then()
        this._dialogRef.close()
      },

      // error: error => {
      //   this._alertService.error(error)
      //   console.log('error')
      // }
    })
    this._dialogRef.close()
  }

  show() {
    this.isForgetModalOpen = true
  }
}
