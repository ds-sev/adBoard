import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core'
import { IAd } from '../../../models/ad'
import { Router } from '@angular/router'
import { CurrencyPipe, DatePipe, NgIf } from '@angular/common'
import { GlobalModule } from '../../../modules/global/global.module'

@Component({
  selector: 'app-ad-card',
  templateUrl: './ad-card.component.html',
  styleUrls: ['./ad-card.component.scss']
})

export class AdCardComponent {

  targetAdId!: string

  constructor(private router: Router) {
  }

  @Input() public ad!: IAd
  @Output() test = new EventEmitter()

  onAdClick() {
    this.targetAdId = this.ad.id
    this.router.navigate(['ad', this.ad.id]).then()

    // console.log(this.targetAdId)
  }
}

@NgModule({
  declarations: [AdCardComponent],
  imports: [CurrencyPipe, NgIf, DatePipe, GlobalModule],
  exports: [AdCardComponent]
})

export class AddCardComponentModule {
}
