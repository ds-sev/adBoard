import { Component } from '@angular/core'
import { AdsService } from '../../services/ads.service'
import { IAd } from '../../models/ad'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent {
  ads!: IAd[]
  adsSubscription!: Subscription

  constructor(private _adService: AdsService) {
  }

  ngOnInit(): void {
    this.adsSubscription = this._adService.getAdsList().subscribe((data) => {
      this.ads = data
      console.log(data)
      console.log(this.ads)
    })
  }

  ngOnDestroy() {
    if (this.adsSubscription) this.adsSubscription.unsubscribe()
  }
}


