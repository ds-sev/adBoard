import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { IAd } from '../../../../models/ad'
import { MessageService } from 'primeng/api'
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
    // private _messageService: MessageService
  ) {
  }
  newAdForm!: FormGroup
  formGroup: any

  // categories!: any

  ngOnInit() {
    this.newAdForm = this._formBuilder.group({
      category: [''],
      name: ['', [Validators.required, Validators.minLength(5)]],
      description: [''],
      address: [''],
      price: [null]
    })

    this._adsService.getCategories().subscribe((data) => {
      this.categories = data
      console.log(this.categories)
    })

    // this.categories = [
    //   {
    //     name: 'Животные',
    //     code: 'AN'
    //   },
    //   {
    //     name: 'Транспорт',
    //     code: 'TR'
    //   },
    //   {
    //     name: 'Недвижимость',
    //     code: 'HS'
    //
    //   }
    // ]
  }
  get form() { return this.newAdForm.controls }

  // onCreateBtnClick() {
  //   console.log(this.form)
  //   console.log(this.form['category'].value.name)
  //   console.log(this.form['name'].value)
  //   console.log(this.form['category'].value)
  //   console.log(this.form['address'].value)
  //   console.log(this.form['price'].value)
  //
  // }

  triggerClick() {
    this.inputRef.nativeElement.click()
  }

  onFileUpload(event: any) {
    const file = event.target.files[0]
    this.image = file
    console.log('image:' + this.image)

    const reader = new FileReader()
    reader.onload = () => {
      this.imagePreview = reader.result
    }

    reader.readAsDataURL(file)

  }

  onSubmit() {
    // this._adsService.getAdsList().subscribe((data) => {
    //   console.log(data)
    // })

    // this.newAdForm.disable()

    // this._adsService.getAdsList()
    this._adsService.newAd().subscribe((data) => {
      console.log(data)
    })

    // console.log(this._authService.userValue)
    // this._adsService.getAdsList()
    // console.log(this.form['name'].value)
    // console.log(this.newAdForm.value)


  }

  // onUploadBtnClick(event: any) {
  //   this._messageService.add({severity: 'Info', summary: 'Success', detail: 'Изображение загружено'})
  //   console.log('hello')
  // }

}
