import { Component } from '@angular/core'
import { DialogService } from 'primeng/dynamicdialog'

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.scss']
})
export class AdDetailsComponent {
  constructor(public dialogService: DialogService) {
  }

  displayModal: boolean = false

  onPhoneBtnClick() {
    this.displayModal = true
  }
}

