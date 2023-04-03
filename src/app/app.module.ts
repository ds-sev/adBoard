import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AdCardComponent } from './shared/components/ad-card/ad-card.component';
import { HeaderComponent } from './components/UI/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/UI/footer/footer.component';
import { NavigationComponent } from './components/UI/navigation/navigation.component'
import { CascadeSelectModule } from 'primeng/cascadeselect'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ButtonModule } from 'primeng/button';
import { NewAdComponent } from './pages/new-ad/new-ad.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component'
import { AppRoutingModule } from './app-routing.module';
import { RecommendationsComponent } from './pages/recommendations/recommendations.component'
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CheckboxModule } from 'primeng/checkbox';
import { AccordionModule } from 'primeng/accordion'
import { InputMaskModule } from 'primeng/inputmask'
import { InplaceModule } from 'primeng/inplace'
import { InputTextModule } from 'primeng/inputtext';
import { AdDetailsComponent } from './pages/ad-details/ad-details.component';
import { AuthComponent } from './pages/auth/auth.component';
import { SignInComponent } from './components/UI/sign-in/sign-in.component';
import { SignUpComponent } from './components/UI/sign-up/sign-up.component'
import { DialogService } from 'primeng/dynamicdialog';
import { MyAdsComponent } from './pages/my-ads/my-ads.component';
import { NewAdCardComponent } from './components/new-ad-card/new-ad-card.component'
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { UserMenuComponent } from './components/UI/user-menu/user-menu.component'
import { MenuModule } from 'primeng/menu'
import { ToastModule } from 'primeng/toast'
import { MessagesModule } from 'primeng/messages'
import { PasswordModule } from 'primeng/password';
import { SellerInfoModalComponent } from './components/seller-info-modal/seller-info-modal.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdCardComponent,
    FooterComponent,
    NavigationComponent,
    NewAdComponent,
    AccountSettingsComponent,
    RecommendationsComponent,
    AdDetailsComponent,
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    MyAdsComponent,
    NewAdCardComponent,
    UserMenuComponent,
    SellerInfoModalComponent,
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
    PasswordModule
  ],
  providers: [
    DialogService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
