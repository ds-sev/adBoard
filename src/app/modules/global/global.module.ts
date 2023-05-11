import { NgModule } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { GlobalRoutingModule } from './global-routing.module'
import { AdDetailsComponent } from './pages/ad-details/ad-details.component'
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog'
import { SellerInfoModalComponent } from './modals/seller-info-modal/seller-info-modal.component'
import { RulesComponent } from './pages/rules/rules.component'
import { HomeComponent } from './pages/home/home.component'
import { RecommendationsComponent } from './pages/recommendations/recommendations.component'
import { AddCardComponentModule } from '../../shared/components/ad-card/ad-card.component';
import { FilteredAdsComponent } from './pages/filtered-ads/filtered-ads.component'
import { SharedModule } from '../../shared/shared.module'

@NgModule({
  declarations: [AdDetailsComponent,
    SellerInfoModalComponent,
    RulesComponent,
    HomeComponent,
    RecommendationsComponent,
    FilteredAdsComponent,
  ],
  exports: [
    AdDetailsComponent,
    HomeComponent,
    RecommendationsComponent,
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
  ]
})

export class GlobalModule { }
