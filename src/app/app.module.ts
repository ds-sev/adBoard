import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdViewComponent } from './modules/ad-registry/pages/ad-view/ad-view/ad-view.component';
import { CardComponent } from './shared/components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component'
import { CascadeSelectModule } from 'primeng/cascadeselect'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ButtonModule } from 'primeng/button';
import { RecommendationsComponent } from './pages/recommendations/recommendations.component';
import { MyAdsComponent } from './pages/my-ads/my-ads.component';
import { NewAdComponent } from './pages/new-ad/new-ad.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    AdViewComponent,
    HeaderComponent,
    CardComponent,
    FooterComponent,
    NavigationComponent,
    RecommendationsComponent,
    MyAdsComponent,
    NewAdComponent,
    AccountSettingsComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    CascadeSelectModule,
    ReactiveFormsModule,
    ButtonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
