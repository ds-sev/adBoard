import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ICategory } from '../../models/category'
import { AdsService } from '../../services/ads.service'
import { Router } from '@angular/router'
import { CategoriesService } from '../../services/categories.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  categories!: ICategory[]
  category!: string
  findByCategory!: FormGroup
  findByName!: FormGroup
  request: string = ''
  selectedCategory!: string

  constructor(
    private _adsService: AdsService,
    private _categoryService: CategoriesService,
    private _router: Router
  ) {
  }

  ngOnInit() {
    this.findByCategory = new FormGroup({
      category: new FormControl<string>('')
    })

    this.findByName = new FormGroup({
      name: new FormControl<string>('', [Validators.minLength(3), Validators.required])
    })

    this._categoryService.getCategoriesList().subscribe((data) => {
      this.categories = data
    })
  }

  onFindBtnClick() {
    this.request = this.findByName.controls['name'].value
    this._router.navigate(['filter'], {
      queryParams: {
        option: 'findByText',
        request: this.request,
        pageTitle: `Объявления по запросу «${this.request}»:`
      },
    }).then()
    this.findByName.reset()
  }

  selectCategory() {
    this.selectedCategory = this.findByCategory.controls['category'].value.id
    this._router.navigate(['filter'], {
      queryParams: {
        option: 'findByCategory',
        request: this.selectedCategory,
        pageTitle: `Объявления в категории «${this.findByCategory.controls['category'].value.name}»:`
      }
    }).then()
    this.findByCategory.reset()
  }
}
