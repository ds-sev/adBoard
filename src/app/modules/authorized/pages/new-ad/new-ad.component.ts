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
  formData!: IAd




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
      console.log(this.categories[0].id)
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
    // console.log('image:' + this.image)

    const reader = new FileReader()
    reader.onload = () => {
      this.imagePreview = reader.result
    }

    reader.readAsDataURL(file)

  }

  onSubmit() {
    //
    // const formData: any = new FormData()
    // if (this.form['image'].value) {
    //   formData.append('imageUrl', this.form['image'].value)
    // }




    this._adsService.newAd(this.newAdForm.value).subscribe()
    // this._adsService.newAd(this.newAdForm.value, this.image).subscribe()

    // console.log(this.form['category'].value.id)
    // console.log(this.form['name'].value)
    // console.log(this.form['description'].value)
    // console.log(this.form['address'].value)
    // console.log(this.image)
    // console.log(this.form['price'].value)


    // this.newAdForm.disable()
    // this._adsService.newAd().subscribe()
    // this._adsService.deleteAd('2f505b44-9421-4b4f-8fb8-cfada6900990').subscribe()
  }

  // onUploadBtnClick(event: any) {
  //   this._messageService.add({severity: 'Info', summary: 'Success', detail: 'Изображение загружено'})
  //   console.log('hello')
  // }

}
