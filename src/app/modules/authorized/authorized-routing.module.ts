import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAdsComponent } from './pages/my-ads/my-ads.component'
import { NewAdComponent } from './pages/new-ad/new-ad.component'
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component'
import { AdDetailsComponent } from '../global/pages/ad-details/ad-details.component'

const routes: Routes = [
  {path: 'my-ads', component: MyAdsComponent},
  {path: 'new-ad', component: NewAdComponent},
  {path: 'settings', component: AccountSettingsComponent},
  {path: 'ad/:id', component: AdDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizedRoutingModule { }
