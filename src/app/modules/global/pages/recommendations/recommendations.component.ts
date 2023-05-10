import { Component, Input } from '@angular/core'
import { AdsService } from '../../../../services/ads.service'
import { IAd } from '../../../../models/ad'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
})
export class RecommendationsComponent {
  isLoading: boolean = false

  @Input() pageTitle!: string

  @Input() adsList!: IAd[];

  constructor(private _adService: AdsService) {

  }
  // ngOnInit(): void {
  //   this.adsSubscription = this._adService.getAdsList().subscribe((data) => {
  //     this.ads = data
  //     this.isLoading = false
  //   })
  // }
  // ngOnDestroy() {
  //   if (this.adsSubscription) this.adsSubscription.unsubscribe()
  // }
  ngOnInit() {
    console.log(this.adsList)
    console.log(this.pageTitle)
  }

}
