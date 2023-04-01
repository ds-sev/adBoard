import { Component } from '@angular/core';
import { DialogBoxComponent} from '../dialog-box/dialog-box.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {



  visible: boolean = false;
  checked: boolean = true;

  showDialog() {
    this.visible = true

}




  // visible!: boolean;
  //
  // showDialog() {
  //   this.visible = true;
  //
  // }
}

