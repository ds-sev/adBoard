import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { ICategory } from '../../models/category'
import { AdsService } from '../../services/ads.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {

  constructor(
    private _adsService: AdsService
  ) {
  }
  onCategoriesBtnClick() {
  }


  categories!: ICategory[];

  selectedCategory: any;

  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      selectedCategory: new FormControl<object | null>(null)
    });

    this._adsService.getCategories().subscribe((data) => {
      this.categories = data
      console.log(this.categories)
    })

//     this.categories = [
//   {
//     name: '{P{P}',
//     code: 'AU',
//     states: [
//
//     ]
//   },
//   {
//     name: 'Недвижимость',
//     code: 'CA',
//     states: [
//       {
//         name: 'Quebec',
//         cities: [
//           { cname: 'Montreal', code: 'C-MO' },
//           { cname: 'Quebec City', code: 'C-QU' }
//         ]
//       },
//       {
//         name: 'Ontario',
//         cities: [
//           { cname: 'Ottawa', code: 'C-OT' },
//           { cname: 'Toronto', code: 'C-TO' }
//         ]
//       }
//     ]
//   },
//   {
//     name: 'Работа',
//     code: 'US',
//     states: [
//       {
//         name: 'California',
//         cities: [
//           { cname: 'Los Angeles', code: 'US-LA' },
//           { cname: 'San Diego', code: 'US-SD' },
//           { cname: 'San Francisco', code: 'US-SF' }
//         ]
//       },
//       {
//         name: 'Florida',
//         cities: [
//           { cname: 'Jacksonville', code: 'US-JA' },
//           { cname: 'Miami', code: 'US-MI' },
//           { cname: 'Tampa', code: 'US-TA' },
//           { cname: 'Orlando', code: 'US-OR' }
//         ]
//       },
//       {
//         name: 'Texas',
//         cities: [
//           { cname: 'Austin', code: 'US-AU' },
//           { cname: 'Dallas', code: 'US-DA' },
//           { cname: 'Houston', code: 'US-HO' }
//         ]
//       }
//     ]
//   },
//   {
//     name: 'Услуги',
//     code: 'US',
//     states: []
//   }
// ];


  }
}





// this.categories = [
//
//   {
//     name: 'Транспорт',
//     id: 'Транспорт',
//     parentId: 'string',
//     isActive: true,
//     createdAt: 'string'
//   },
//   {
//     name: 'Транспорт',
//     id: 'Транспорт',
//     parentId: 'string',
//     isActive: true,
//     createdAt: 'string'
//   }
// ];
