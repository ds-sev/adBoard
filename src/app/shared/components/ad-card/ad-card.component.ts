import { Component, Input } from '@angular/core'
import { IAd } from '../../../models/ad'

@Component({
  selector: 'app-ad-card',
  templateUrl: './ad-card.component.html',
  styleUrls: ['./ad-card.component.scss']
})

export class AdCardComponent {
  @Input() public ad!: IAd
}



