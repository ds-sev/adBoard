import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NewAdComponent } from './pages/new-ad/new-ad.component'
import { AdsSectionComponent } from './modules/ads-section/ads-section.component'
import { DialogBoxComponent } from './components/UI/dialog-box/dialog-box.component'
import { AdDetailsComponent } from './pages/ad-details/ad-details.component'
import { SignInComponent } from './services/user/sign-in/sign-in.component'
import { SignUpComponent } from './services/user/sign-up/sign-up.component'
import { MyAdsComponent } from './pages/my-ads/my-ads.component'

const routes: Routes = [
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  // {path: 'authenticated', component: AuthComponent, children: [
  {path: 'my-ads', component: MyAdsComponent},
     {path: 'new-ad', component: NewAdComponent},
  // {path: 'account-settings', component: AccountSettingsComponent},
  //
  //   ]},
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: AdsSectionComponent},
  {path: 'ad/:id', component: AdDetailsComponent},
  {path: 'dialog', component: DialogBoxComponent},
  {path: '**', redirectTo: '', component: AdsSectionComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
