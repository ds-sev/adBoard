import { Component, Input, OnInit } from '@angular/core'
import { AdsService } from '../../../../services/ads.service'
import { IAd } from '../../../../models/ad'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
})
export class RecommendationsComponent implements OnInit {
  isLoading: boolean = false
  ads!: IAd[]
  adsSubscription!: Subscription

  @Input() filteredAds!: IAd[];

  constructor(private _adService: AdsService) {
    console.log(this.filteredAds)
  }
  ngOnInit(): void {
    this.adsSubscription = this._adService.getAdsList().subscribe((data) => {
      this.ads = data
      this.isLoading = false
    })
  }
  ngOnDestroy() {
    if (this.adsSubscription) this.adsSubscription.unsubscribe()
  }

}
