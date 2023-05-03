import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { IAd } from '../../../../models/ad'
import { AdsService } from '../../../../services/ads.service'
import { AuthService } from '../../../../services/auth.service'
import { ICategory } from '../../../../models/category'

@Component({
  selector: 'app-new-ad',
  templateUrl: './new-ad.component.html',
  styleUrls: ['./new-ad.component.scss']
})
export class NewAdComponent implements OnInit {
  @ViewChild('input') inputRef!: ElementRef
  image!: File
  imagePreview: string | ArrayBuffer | null = ''
  categories!: ICategory[]

  constructor(
    private _formBuilder: FormBuilder,
    private _adsService: AdsService,
    private _authService: AuthService
  ) {
  }
  newAdForm!: FormGroup

  ngOnInit() {
    this.newAdForm = this._formBuilder.group({
      category: [''],
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
      address: [''],
      price: [null]
    })

    this._adsService.getCategories().subscribe((data) => {
      this.categories = data
    })
  }

  get form() { return this.newAdForm.controls }

  triggerClick() {
    this.inputRef.nativeElement.click()
  }
// prepare to work with image-file
  onFileUpload(event: any) {
    const file = event.target.files[0]
    this.image = file
    const reader = new FileReader()
    reader.onload = () => {
      this.imagePreview = reader.result
    }
// view downloaded image on new-ad page
    reader.readAsDataURL(file)
    this._adsService.imageUpload(this.image)
  }
// send new advert`s data to ads service
  onSubmit() {
    this._adsService.newAd(this.newAdForm.value).subscribe()
  }
}
