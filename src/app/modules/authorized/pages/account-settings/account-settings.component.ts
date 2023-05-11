import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UserService } from '../../../../services/user.service'
import { ILocalUserData } from '../../../../models/local-user-data'

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {
  checkVisible: string = 'display: flex'

  localUserData!: ILocalUserData | null

  isPassBtnDisabled: boolean = true

  accSettingsForm!: FormGroup
  passSettingsForm!: FormGroup

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService
  ) {
  }

  ngOnInit() {
    // @ts-ignore
    this.localUserData = JSON.parse(localStorage.getItem('userInfo'))
    this.accSettingsForm = this._formBuilder.group({
      login: [`${this.localUserData?.login || ''}`, [Validators.required, Validators.minLength(5)]],
      phone: [`${this.localUserData?.phone || ''}`, [Validators.required]],
      address: [`${this.localUserData?.address || ''}`]
    })

    this.passSettingsForm = this._formBuilder.group({
      oldPass: ['', Validators.required],
      newPass: ['', [Validators.required, Validators.minLength(6)]],
      newPassConfirm: ['', Validators.required]
    })

    this.accSettingsForm.valueChanges.subscribe((data) => console.log(data))

  // check form data validity for change password button status
    this.passSettingsForm.valueChanges.subscribe((value) => {
      this.isPassBtnDisabled = !(
        this.passSettingsForm.valid &&
        value.oldPass !== '' &&
        value.newPass === value.newPassConfirm);
    })


  }
  get accForm() {
    return this.accSettingsForm.controls
  }

  get passForm() {
    return this.passSettingsForm.controls
  }

  onAccInfoSubmit() {
    // console.log({this.accForm['login'].value, this.accForm['phone'].value, this.accForm['address'].value})
    this._userService.saveInfo({
      login: this.accForm['login'].value,
      phone: this.accForm['phone'].value,
      address: this.accForm['address'].value}
    )


  }

}
