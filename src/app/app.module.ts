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
import { AdsSectionComponent } from './modules/ads-section/ads-section.component'
import { HttpClientModule } from '@angular/common/http';
import { DialogBoxComponent } from './components/UI/dialog-box/dialog-box.component'
import { DialogModule } from 'primeng/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CheckboxModule } from 'primeng/checkbox';
import { AccordionModule } from 'primeng/accordion'
import { InputMaskModule } from 'primeng/inputmask'
import { InplaceModule } from 'primeng/inplace'
import { InputTextModule } from 'primeng/inputtext';
import { AdDetailsComponent } from './pages/ad-details/ad-details.component';
import { AuthComponent } from './pages/auth/auth.component';
import { SignInComponent } from './services/user/sign-in/sign-in.component';
import { SignUpComponent } from './services/user/sign-up/sign-up.component'
import { DialogService } from 'primeng/dynamicdialog';
import { MyAdsComponent } from './pages/my-ads/my-ads.component';
import { NewAdCardComponent } from './components/new-ad-card/new-ad-card.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdCardComponent,
    FooterComponent,
    NavigationComponent,
    NewAdComponent,
    AccountSettingsComponent,
    AdsSectionComponent,
    DialogBoxComponent,
    AdDetailsComponent,
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    MyAdsComponent,
    NewAdCardComponent,
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
  ],
  providers: [
    DialogService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
