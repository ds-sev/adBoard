import { Component, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { ICategory } from '../../models/category'
import { AdsService } from '../../services/ads.service'
import { Router } from '@angular/router'

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
  request!: string

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
    this.request = this.findByName.controls['name'].value
    this._router.navigate(['filter'], {queryParams: {request: this.request}}).then()
  }
}
