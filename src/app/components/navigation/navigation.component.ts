import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { ICategory } from '../../models/category'
import { AdsService } from '../../services/ads.service'
import { IAd } from '../../models/ad'
import { retry } from 'rxjs'
import { provideRouter, Router } from '@angular/router'
import { FilteredComponent } from '../../modules/global/pages/filtered/filtered.component'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {

  constructor(
    private _adsService: AdsService,
    private _router: Router
  ) {
  }

  onCategoriesBtnClick() {
  }

  categories!: ICategory[]
  selectedCategory: any
  findByCategory!: FormGroup
  findByName!: FormGroup
  filteredAds: IAd[] = []

  ngOnInit() {

    this.findByCategory = new FormGroup({
      selectedCategory: new FormControl<object | null>(null)
    })

    this.findByName = new FormGroup({
      name: new FormControl<string>('')
    })

    this._adsService.getCategories().subscribe((data) => {
      this.categories = data
    })
  }

  onFindBtnClick() {
    this._adsService.getAdsList()
    .subscribe((ads) => {
        ads.filter((ad) => {
          ad.name.toLowerCase().includes(
            this.findByName.controls['name'].value.toLowerCase())
            ? this.filteredAds.push(ad)
            : ''
        })
      }
    )
    console.log(this.filteredAds)
    this._router.navigate(['home']).then()

  }
}
