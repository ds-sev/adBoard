import { Component, Input, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { User } from '../../../models/user'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  btnText = 'Войти'

  signInForm = new FormGroup({

    phone: new FormControl<any>(null, Validators.required),
    password: new FormControl<any>(null, Validators.required)
  })

  loggedIn!: boolean


  onSubmit() {
    if (this.signInForm.value.phone === 1) {

    }

  }



}
