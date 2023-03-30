import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { RecommendationsComponent } from './pages/recommendations/recommendations.component'
import { NewAdComponent } from './pages/new-ad/new-ad.component'
import { AdDetailsComponent } from './pages/ad-details/ad-details.component'
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component'
import { MyAdsComponent } from './pages/my-ads/my-ads.component'

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'recommendations', component: RecommendationsComponent},
  {path: 'my-ads', component: MyAdsComponent},
  {path: 'new-ad', component: NewAdComponent},
  {path: 'ad/:id', component: AdDetailsComponent},
  {path: 'account-settings', component: AccountSettingsComponent},

  {path: '**', redirectTo: '', component: RecommendationsComponent},
]

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
