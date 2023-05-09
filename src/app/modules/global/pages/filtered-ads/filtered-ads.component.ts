import { Component, Input, OnInit } from '@angular/core'
import { IAd } from '../../../../models/ad'
import { request } from 'express'
import { Subscription } from 'rxjs'
import { ActivatedRoute } from '@angular/router'
import { AdsService } from '../../../../services/ads.service'

@Component({
  selector: 'app-filtered-ads',
  templateUrl: './filtered-ads.component.html',
  styleUrls: ['./filtered-ads.component.scss']
})
export class FilteredAdsComponent implements OnInit {
  adsList: IAd[] = []
  request!: string
  filteredAds: IAd[] = []
  private _querySubscription!: Subscription
  private _routeSubscription!: Subscription

  constructor(
    private _route: ActivatedRoute,
    private _adsService: AdsService
    ) {


    this._querySubscription = _route.queryParams.subscribe((queryParam: any) => {
        this.request = queryParam['request']


      }
    )
  }

  ngOnInit() {
    this._adsService.getAdsList()
    .subscribe((ads) => {
        ads.filter((ad) => {
          ad.name.toLowerCase().includes(
            this.request.toLowerCase())
            ? this.filteredAds.push(ad)
            : ''
        })
      }
    )
    console.log(this.request)
    console.log(this.filteredAds)
    // this._routeSubscription = this.route.params.subscribe

  }
}
