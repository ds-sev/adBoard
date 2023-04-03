import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { SignInComponent } from '../sign-in/sign-in.component'
import { DialogService } from 'primeng/dynamicdialog'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(
    private dialogService: DialogService
  ) {
  }

  btnText = 'Зарегистрироваться'

  signUpForm = new FormGroup({

    phone: new FormControl<any>('', Validators.required),
    password: new FormControl<any>('', Validators.required)
  })

  onLogin() {
    this.dialogService.open(SignInComponent, {
      header: 'Авторизация',
    })
  }

  onSubmit() {
    console.log(this.signUpForm.value.phone)
  }
}
