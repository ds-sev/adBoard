import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component'
import { SignUpComponent } from './components/sign-up/sign-up.component'
import { ReactiveFormsModule } from '@angular/forms'
import { InputTextModule } from 'primeng/inputtext'
import { CheckboxModule } from 'primeng/checkbox'
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog'


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,

  ],
  imports: [

    CommonModule,
    GuestRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    DialogModule
  ]
})
export class GuestModule { }
