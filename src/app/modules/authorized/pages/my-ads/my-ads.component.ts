import { Component } from '@angular/core'
import { IAd } from '../../../../models/ad'
import { example } from '../../../../services/example'
import { Router } from '@angular/router'
import { AdsService } from '../../../../services/ads.service'

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.scss']
})

export class MyAdsComponent {
  constructor(
    private _router: Router,
    private _adsService: AdsService
    ) {
  }
  ads: IAd[] = example
  onNewAdBtnClick() {
      this._router.navigate(['new-ad']).then()
  }
}




