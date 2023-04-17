import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { IAd } from '../../../../models/ad'

@Component({
  selector: 'app-new-ad',
  templateUrl: './new-ad.component.html',
  styleUrls: ['./new-ad.component.scss']
})
export class NewAdComponent implements OnInit {

  constructor(
    private _formBuilder: FormBuilder,
  ) {
  }
  newAdForm!: FormGroup
  formGroup: any


  categories!: any



  ngOnInit() {
    this.newAdForm = this._formBuilder.group({
      category: ['', Validators.required],
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: [''],
      address: [''],
      price: [null]
    })

    this.categories = [
      {
        name: 'Животные',
        code: 'AN'
      },
      {
        name: 'Транспорт',
        code: 'TR'
      },
      {
        name: 'Недвижимость',
        code: 'HS'

      }
    ]

    this.newAdForm.valueChanges.subscribe(value => console.log(value))
  }
  get form() { return this.newAdForm.controls }

  onCreateBtnClick() {
    console.log(this.form)
    console.log(this.form['category'].value.name)
    console.log(this.form['title'].value)
    console.log(this.form['category'].value)
    console.log(this.form['address'].value)
    console.log(this.form['price'].value)

  }

}
