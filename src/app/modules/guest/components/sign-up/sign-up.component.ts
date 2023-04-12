import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { SignInComponent } from '../sign-in/sign-in.component'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog'
import { AuthService } from '../../../../services/auth.service'
import { first } from 'rxjs'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup

  constructor(
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private dialogService: DialogService,
    private readonly _dialogRef: DynamicDialogRef
  ) {
  }

  ngOnInit() {
    this.signUpForm = this._formBuilder.group({
      email: [''],
      login: [''],
      password: ['']
    })
  }

  // get form() { return this.form.controls }

  onLoginClick() {
    this._dialogRef.close()
    this.dialogService.open(SignInComponent, {
      header: 'Авторизация',
      modal: true,
      dismissableMask: true
    })
  }

  onSubmit() {
    console.log(this.signUpForm.value.email)
    this._authService.register(this.signUpForm.value)
    .pipe(first())
    .subscribe({
      next: () => {
        this.onLoginClick()
      }
    })
  }
}
