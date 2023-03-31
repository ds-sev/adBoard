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
import { HttpClientModule } from '@angular/common/http'

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
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    CascadeSelectModule,
    ReactiveFormsModule,
    ButtonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
