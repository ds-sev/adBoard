import { Component, Input, NgModule } from '@angular/core'
import { IAd } from '../../../models/ad'
import { Router } from '@angular/router'
import { CurrencyPipe, DatePipe, NgIf } from '@angular/common'
import { ButtonModule } from 'primeng/button'
import { AdsService } from '../../../services/ads.service'
import { SharedModule } from '../../shared.module'

@Component({
  selector: 'app-ad-card',
  templateUrl: './ad-card.component.html',
  styleUrls: ['./ad-card.component.scss']
})

export class AdCardComponent {
  targetAdId!: string | undefined
  @Input() public ad!: IAd

  constructor(
    private router: Router,
    private _adsService: AdsService,
    ) {
  }

  onAdClick() {
    this.targetAdId = this.ad.id
    this.router.navigate(['ad', this.ad.id]).then()
  }

  onDeleteBtnClick() {
    this._adsService.deleteAd(this.ad.id).subscribe()
  }
}

@NgModule({
  declarations: [AdCardComponent],
  imports: [CurrencyPipe, NgIf, DatePipe, ButtonModule, SharedModule],
  exports: [AdCardComponent]
})

export class AddCardComponentModule {
}
