import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core'
import { IAd } from '../../../models/ad'
import { Router } from '@angular/router'
import { CurrencyPipe, NgIf } from '@angular/common'

@Component({
  selector: 'app-ad-card',
  templateUrl: './ad-card.component.html',
  styleUrls: ['./ad-card.component.scss']
})

export class AdCardComponent {
  constructor(private router: Router) {
  }

  @Input() public ad!: IAd
  @Output() test = new EventEmitter()

  onAdClick() {
    this.router.navigate(['ad', this.ad.id]).then()
  }
}

@NgModule({
  declarations: [AdCardComponent],
  imports: [CurrencyPipe, NgIf],
  exports: [AdCardComponent]
})

export class AddCardComponentModule {
}
