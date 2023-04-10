import { Component, Input, NgModule } from '@angular/core'
import { CurrencyPipe, NgIf } from '@angular/common'
import { AdCardComponent } from '../../../../shared/components/ad-card/ad-card.component'
import { SignInComponent } from './components/sign-in/sign-in.component'
import { SignUpComponent } from './components/sign-up/sign-up.component'
import { ReactiveFormsModule } from '@angular/forms'
import { CheckboxModule } from 'primeng/checkbox'
import { InputTextModule } from 'primeng/inputtext'
import { ButtonModule } from 'primeng/button'

@Component({
  selector: 'app-sign-modal',
  template: `<ng-container *ngIf="!isLoginModalOpen"><app-sign-up></app-sign-up></ng-container>`,
  styleUrls: ['./sign-modal.component.scss']
})
export class SignModalComponent {
  isLoginModalOpen: boolean = false
  @Input() isLoggedIn!: boolean


}






@NgModule({
  declarations: [SignModalComponent, SignInComponent, SignUpComponent],
  imports: [
    ReactiveFormsModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    NgIf
  ],
  exports: [SignModalComponent]
})

export class SignModalComponentModule {}
