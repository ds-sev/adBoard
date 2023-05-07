import { Component, OnInit } from '@angular/core'
import { DialogService } from 'primeng/dynamicdialog'
import { IAd } from '../../../../models/ad'
import { AdsService } from '../../../../services/ads.service'
import { ActivatedRoute } from '@angular/router'
import { CategoriesService } from '../../../../services/categories.service'

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.scss']
})

export class AdDetailsComponent implements OnInit {
  adData: IAd | undefined
  category!: string
  displayModal: boolean = false

  constructor(
    private _adsService: AdsService,
    private _category: CategoriesService,
    private _route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const routeParams = this._route.snapshot.paramMap
    const adIdFromRoute =
      String(routeParams.get('id'))

    this._adsService.getAd(adIdFromRoute).subscribe((data) => {
      this.adData = data
      console.log(data)
      this._category.getCategoryInfo(data.categoryId).subscribe((data) => {
        this.category = data.name
      })
    })
  }
  onPhoneBtnClick() {
    this.displayModal = true
  }
}

