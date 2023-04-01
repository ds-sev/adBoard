import { Component, OnInit } from '@angular/core'
import { AdCardComponent } from '../../shared/components/ad-card/ad-card.component'
import { AdsService } from '../../services/ads.service'
import { IAd } from '../../models/ad'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-ads-section',
  templateUrl: './ads-section.component.html',
  styleUrls: ['./ads-section.component.scss']
})
export class AdsSectionComponent {
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
    // this._adService.getAdsList()
    // .subscribe(response => {
    //   // this.ads = response.data
    // } )
  }

  ngOnDestroy() {
    if (this.adsSubscription) this.adsSubscription.unsubscribe()
  }
}


