import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NewAdComponent } from './modules/authorized/pages/new-ad/new-ad.component'
import { RecommendationsComponent } from './modules/global/pages/recommendations/recommendations.component'
import { AdDetailsComponent } from './modules/global/pages/ad-details/ad-details.component'
import { MyAdsComponent } from './modules/authorized/pages/my-ads/my-ads.component'
import { AccountSettingsComponent } from './modules/authorized/pages/account-settings/account-settings.component'

const routes: Routes = [
  // {path: 'sign-in', component: SignInComponent},
  // {path: 'sign-up', component: SignUpComponent},

  // {path: 'my-ads', component: MyAdsComponent},
  // {path: 'new-ad', component: NewAdComponent},
  // {path: 'settings', component: AccountSettingsComponent},
  //
  // {path: 'ad/:id', component: AdDetailsComponent},





  {path: '', loadChildren:() => import('./modules/global/global.module').then(m => m.GlobalModule)},
  {path: '', loadChildren:() => import('./modules/guest/guest.module').then(m => m.GuestModule)},
  {path: '', loadChildren:() => import('./modules/authorized/authorized.module').then(m => m.AuthorizedModule)},

  {path: '**', redirectTo: ''}

  // {path: '', loadChildren:() => import('./modules/global/global-routing.module').then(m => m.GlobalRoutingModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
