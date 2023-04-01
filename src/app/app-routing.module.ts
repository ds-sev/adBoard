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

const routes: Routes = [
  {path: '', component: AdsSectionComponent},
  {path: 'recommendations', component: RecommendationsComponent},
  {path: 'my-ads', component: MyAdsComponent},
  {path: 'new-ad', component: NewAdComponent},
  {path: 'ad/:id', component: AdDetailsComponent},
  {path: 'account-settings', component: AccountSettingsComponent},


  {path: 'dialog', component: DialogBoxComponent},

  {path: '**', redirectTo: '', component: AppComponent},
]

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
