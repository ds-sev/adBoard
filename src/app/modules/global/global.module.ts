import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalRoutingModule } from './global-routing.module';
import { AdDetailsComponent } from './pages/ad-details/ad-details.component'
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog'
import { SellerInfoModalComponent } from './modals/seller-info-modal/seller-info-modal.component'


@NgModule({
  declarations: [AdDetailsComponent, SellerInfoModalComponent],
  exports: [
    AdDetailsComponent
  ],
  imports: [
    CommonModule,
    GlobalRoutingModule,
    ButtonModule,
    DialogModule
  ]
})
export class GlobalModule { }
