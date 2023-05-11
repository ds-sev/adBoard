import { Component, OnInit } from '@angular/core'
import { IAd } from '../../../../models/ad'
import { AdsService } from '../../../../services/ads.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allAds!: IAd[]

  constructor(
    private _adsService: AdsService
  ) {
  }

  ngOnInit(): void {
    this._adsService.getAdsList().subscribe((data) => {
      this.allAds = data.reverse()
      // this.isLoading = false
    })
  }
}
