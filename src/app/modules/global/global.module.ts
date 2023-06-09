import { NgModule } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { GlobalRoutingModule } from './global-routing.module'
import { AdDetailsComponent } from './pages/ad-details/ad-details.component'
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog'
import { SellerInfoModalComponent } from './modals/seller-info-modal/seller-info-modal.component'
import { RulesComponent } from './pages/rules/rules.component'
import { HomeComponent } from './pages/home/home.component'
import { AdsMainComponent } from './pages/ads-main/ads-main.component'
import { AddCardComponentModule } from '../../shared/components/ad-card/ad-card.component';
import { FilteredAdsComponent } from './pages/filtered-ads/filtered-ads.component'
import { SharedModule } from '../../shared/shared.module'
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component'

@NgModule({
  declarations: [AdDetailsComponent,
    SellerInfoModalComponent,
    RulesComponent,
    HomeComponent,
    AdsMainComponent,
    FilteredAdsComponent,
  ],
  exports: [
    AdDetailsComponent,
    HomeComponent,
    AdsMainComponent,
    FilteredAdsComponent
  ],
  imports: [
    CommonModule,
    GlobalRoutingModule,
    ButtonModule,
    DialogModule,
    NgOptimizedImage,
    AddCardComponentModule,
    SharedModule,
    SpinnerComponent,
  ]
})

export class GlobalModule { }
