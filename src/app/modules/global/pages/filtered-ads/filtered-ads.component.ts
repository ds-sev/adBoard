import {
  Component,
  OnInit
} from '@angular/core'
import { IAd } from '../../../../models/ad'
import { BehaviorSubject, Subscription } from 'rxjs'
import { ActivatedRoute } from '@angular/router'
import { AdsService } from '../../../../services/ads.service'

@Component({
  selector: 'app-filtered-ads',
  templateUrl: './filtered-ads.component.html',
  styleUrls: ['./filtered-ads.component.scss'],

})
export class FilteredAdsComponent implements OnInit {
  request!: string
  filteredAds: IAd[] = []
  changes: BehaviorSubject<IAd[]> = new BehaviorSubject(this.filteredAds)
  pageTitle!: string
  option!: string
  isLoading: boolean = false

  private _querySubscription!: Subscription

  constructor(
    private _route: ActivatedRoute,
    private _adsService: AdsService,

  ) {

    this._querySubscription = _route.queryParams.subscribe((queryParam: any) => {
        this.option = queryParam['option']
        this.request = queryParam['request']
        this.pageTitle = queryParam['pageTitle']
      }
    )
  }
  ngOnInit() {
    this.option === 'findByText'
      ?
      // find ads by text input
      this._adsService.getAdsList()
      .subscribe((ads: IAd[]) => {
          ads.filter((ad: IAd) => {
            ad.name.toLowerCase().includes(
              this.request.toLowerCase())
              ? this.filteredAds.push(ad)
              : ''
          })
        }
      )
      :
      // find ads by category
      this._adsService.getAdsList().subscribe((ads: IAd[]) => {
        ads.forEach((ad: IAd) => {
          this._adsService.getAd(ad.id).subscribe((adData: IAd) => {
            if (adData.categoryId === this.request) {
              this.filteredAds.push(adData)
            }
          })
        })
      })
  }
}
