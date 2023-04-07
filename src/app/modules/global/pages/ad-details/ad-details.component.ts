import { Component, Input } from '@angular/core'
import { DialogService } from 'primeng/dynamicdialog'
import { IAd } from '../../../../models/ad'

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.scss']
})
export class AdDetailsComponent {
  constructor(public dialogService: DialogService) {
  }

  @Input() adDetailsData!: IAd
  @Input() test!: string

  displayModal: boolean = false

  onPhoneBtnClick() {
    this.displayModal = true
  }
}

