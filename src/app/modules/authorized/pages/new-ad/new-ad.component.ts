import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-new-ad',
  templateUrl: './new-ad.component.html',
  styleUrls: ['./new-ad.component.scss']
})
export class NewAdComponent {
  constructor(
    private _formBuilder: FormBuilder,
  ) {
  }
  newAdForm!: FormGroup
  formGroup: any
  categories: any



  ngOnInit() {
    this.newAdForm = this._formBuilder.group({
      title: [''],
      description: [''],
      address: [''],
      price: ['']
    })
  }

}
