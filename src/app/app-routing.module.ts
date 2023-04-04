import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NewAdComponent } from './modules/authorized/pages/new-ad/new-ad.component'
import { RecommendationsComponent } from './modules/global/pages/recommendations/recommendations.component'
import { AdDetailsComponent } from './modules/global/pages/ad-details/ad-details.component'
import { SignInComponent } from './modules/guest/modals/sign-in/sign-in.component'
import { SignUpComponent } from './modules/guest/modals/sign-up/sign-up.component'
import { MyAdsComponent } from './modules/authorized/pages/my-ads/my-ads.component'
import { AccountSettingsComponent } from './modules/authorized/pages/account-settings/account-settings.component'

const routes: Routes = [
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  // {path: 'authenticated', component: AuthComponent, children: [
  {path: 'my-ads', component: MyAdsComponent},
  {path: 'new-ad', component: NewAdComponent},
  {path: 'settings', component: AccountSettingsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: RecommendationsComponent},
  {path: 'ad/:id', component: AdDetailsComponent},
  {path: '**', redirectTo: '', component: RecommendationsComponent},
  {path: 'test', loadChildren:() => import('./modules/authorized/authorized.module').then(m => m.AuthorizedModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
