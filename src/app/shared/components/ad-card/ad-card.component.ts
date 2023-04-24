import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core'
import { IAd } from '../../../models/ad'
import { Router } from '@angular/router'
import { CurrencyPipe, DatePipe, NgIf } from '@angular/common'
import { GlobalModule } from '../../../modules/global/global.module'
import { ButtonModule } from 'primeng/button'
import { AdsService } from '../../../services/ads.service'

@Component({
  selector: 'app-ad-card',
  templateUrl: './ad-card.component.html',
  styleUrls: ['./ad-card.component.scss']
})

export class AdCardComponent {

  targetAdId!: string | undefined

  constructor(
    private router: Router,
    private _adsService: AdsService,
    ) {
  }

  @Input() public ad!: IAd
  @Output() test = new EventEmitter()

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
  imports: [CurrencyPipe, NgIf, DatePipe, GlobalModule, ButtonModule],
  exports: [AdCardComponent]
})

export class AddCardComponentModule {
}
