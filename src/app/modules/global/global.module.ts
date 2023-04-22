import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common'

import { GlobalRoutingModule } from './global-routing.module';
import { AdDetailsComponent } from './pages/ad-details/ad-details.component'
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog'
import { SellerInfoModalComponent } from './modals/seller-info-modal/seller-info-modal.component'
import { RulesComponent } from './pages/rules/rules.component'


@NgModule({
  declarations: [AdDetailsComponent, SellerInfoModalComponent, RulesComponent],
  exports: [
    AdDetailsComponent
  ],
  imports: [
    CommonModule,
    GlobalRoutingModule,
    ButtonModule,
    DialogModule,
    NgOptimizedImage
  ]
})
export class GlobalModule { }
