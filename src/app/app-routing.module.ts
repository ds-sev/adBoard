import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'

import { NewAdComponent } from './pages/new-ad/new-ad.component'

import { AccountSettingsComponent } from './pages/account-settings/account-settings.component'

import { AdsSectionComponent } from './modules/ads-section/ads-section.component'
import {
  RecommendationsComponent
} from './modules/ads-section/components/recommendations/recommendations.component'
import { MyAdsComponent } from './modules/ads-section/components/my-ads/my-ads.component'
import { DialogBoxComponent } from './components/UI/dialog-box/dialog-box.component'
import { AdDetailsComponent } from './pages/ad-details/ad-details.component'
import { AuthComponent } from './pages/auth/auth.component'
import { SignInComponent } from './services/user/sign-in/sign-in.component'
import { SignUpComponent } from './services/user/sign-up/sign-up.component'

const routes: Routes = [
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},

  // {path: 'authenticated', component: AuthComponent, children: [
  //
  //     {path: 'my-ads', component: MyAdsComponent},
      {path: 'new-ad', component: NewAdComponent},
  //     {path: 'account-settings', component: AccountSettingsComponent},
  //
  //   ]},

  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},


  {path: 'home', component: AdsSectionComponent},


  {path: 'ad/:id', component: AdDetailsComponent},

  {path: 'dialog', component: DialogBoxComponent},

  {path: '**', redirectTo: '', component: RecommendationsComponent},

]



@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
