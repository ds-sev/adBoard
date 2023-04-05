import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component'
import { CascadeSelectModule } from 'primeng/cascadeselect'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ButtonModule } from 'primeng/button';
import { NewAdComponent } from './modules/authorized/pages/new-ad/new-ad.component';
import { AccountSettingsComponent } from './modules/authorized/pages/account-settings/account-settings.component'
import { AppRoutingModule } from './app-routing.module';
import { RecommendationsComponent } from './modules/global/pages/recommendations/recommendations.component'
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CheckboxModule } from 'primeng/checkbox';
import { AccordionModule } from 'primeng/accordion'
import { InputMaskModule } from 'primeng/inputmask'
import { InplaceModule } from 'primeng/inplace'
import { InputTextModule } from 'primeng/inputtext';
import { AdDetailsComponent } from './modules/global/pages/ad-details/ad-details.component';
import { SignInComponent } from './modules/guest/modals/sign-in/sign-in.component';
import { SignUpComponent } from './modules/guest/modals/sign-up/sign-up.component'
import { DialogService } from 'primeng/dynamicdialog';
import { MyAdsComponent } from './modules/authorized/pages/my-ads/my-ads.component';
import { NewAdCardComponent } from './modules/authorized/components/new-ad-card/new-ad-card.component'
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { UserMenuComponent } from './modules/authorized/user-menu/user-menu.component'
import { MenuModule } from 'primeng/menu'
import { ToastModule } from 'primeng/toast'
import { MessagesModule } from 'primeng/messages'
import { PasswordModule } from 'primeng/password';
import { SellerInfoModalComponent } from './modules/global/modals/seller-info-modal/seller-info-modal.component';
import { ModalConfirmComponent } from './modules/authorized/modals/modal-confirm/modal-confirm.component'
import { AddCardComponentModule } from './shared/components/ad-card/ad-card.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // AdCardComponent,
    FooterComponent,
    NavigationComponent,
    NewAdComponent,
    AccountSettingsComponent,
    RecommendationsComponent,
    AdDetailsComponent,
    SignInComponent,
    SignUpComponent,
    MyAdsComponent,
    NewAdCardComponent,
    UserMenuComponent,
    SellerInfoModalComponent,
    ModalConfirmComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    CascadeSelectModule,
    ReactiveFormsModule,
    ButtonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DialogModule,
    BrowserAnimationsModule,
    CheckboxModule,
    AccordionModule,
    InputMaskModule,
    InplaceModule,
    InputTextModule,
    ProgressSpinnerModule,
    MenuModule,
    ToastModule,
    MessagesModule,
    PasswordModule,
    AddCardComponentModule
  ],
  providers: [
    DialogService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
