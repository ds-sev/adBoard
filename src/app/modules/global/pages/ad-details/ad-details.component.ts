import { Component, Input, OnInit } from '@angular/core'
import { DialogService } from 'primeng/dynamicdialog'
import { IAd } from '../../../../models/ad'
import { AdsService } from '../../../../services/ads.service'
import { Subscription } from 'rxjs'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.scss']
})
export class AdDetailsComponent implements OnInit {

  // adDetailsSubscription!: Subscription
  adData: IAd | undefined

  constructor(
    public dialogService: DialogService,
    private _adsService: AdsService,
    private _route: ActivatedRoute
  ) {

  }

  // @Input() adDetailsData!: IAd
  // @Input() adId!: string

  displayModal: boolean = false

  onPhoneBtnClick() {
    this.displayModal = true
  }

  ngOnInit() {
    const routeParams = this._route.snapshot.paramMap
    const adIdFromRoute =
      String(routeParams.get('id'))

    this._adsService.getAd(adIdFromRoute).subscribe((data) => {
      this.adData = data
      console.log(data.price)
    })

    //
  }
}

