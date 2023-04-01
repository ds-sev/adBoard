import { Component, OnInit } from '@angular/core'


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent{

  visible!: boolean;

  showDialog() {
    this.visible = false;
  }

}

