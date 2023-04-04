import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-seller-info-modal',
  templateUrl: './seller-info-modal.component.html',
  styleUrls: ['./seller-info-modal.component.scss']
})
export class SellerInfoModalComponent {
  phone: string = '+7 (978) 987-65-43'
  @Input() displayModal = true
}




