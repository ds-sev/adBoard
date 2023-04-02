import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { DialogService } from 'primeng/dynamicdialog'


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {

  constructor(public dialogService: DialogService) {
  }

  @Input()visible: boolean = false;

  checked: boolean = true;

 @Input()title!: string
  @Input()btnText!: string

  @Input()loggedIn!: string


  onSubmit() {

  }


  // showLoginDialog() {
  //   console.log('wtf')
  //   this.visible = true
  // }

    // form: FormGroup
  //
  // ngOnInit() {
  //   this.form = new FormGroup({
  //     name: new FormControl(null, )
  //   })
  // }
  //
  // @Input() title = 'hello'
  // @Output() close = new EventEmitter<void>()
  //
  //
  //
  //
  // visible: boolean = false;
  // checked: boolean = true;
  //
  //
  //
  //
  // showLoginDialog() {
  //
  //   this.visible = true
  //
  // }

}

