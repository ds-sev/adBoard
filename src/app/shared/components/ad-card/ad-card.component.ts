import { Component, Input, OnInit } from '@angular/core'
import { IAd } from '../../../models/ad'
import { Subscription } from 'rxjs'
import { AdsService } from '../../../services/ads.service'

@Component({
  selector: 'app-ad-card',
  templateUrl: './ad-card.component.html',
  styleUrls: ['./ad-card.component.scss']
})
// export class AdCardComponent {
//   @Input() ad!: IAd
//
//   // isVisible = false
//
//
//   // title: string = 'hello'
//
// }

// export class AdCardComponent implements OnInit {
export class AdCardComponent {
  @Input() public ad!: IAd

  // // ads!: IAd[];
  // adsSubscription!: Subscription
  // constructor(private _adService: AdsService) {
  // }
  //
  // ngOnInit(): void {
  //
  //   this.adsSubscription = this._adService.getAdsList().subscribe((data) => {
  //     this.ads = data
  //   })
  //   // this._adService.getAdsList()
  //   // .subscribe(response => {
  //   //   // this.ads = response.data
  //   // } )
  // }
  //
  // ngOnDestroy() {
  //   if (this.adsSubscription) this.adsSubscription.unsubscribe()
  // }
}



