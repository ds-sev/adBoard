import { Component, Input, NgModule } from '@angular/core'
import { IAd } from '../../../models/ad'
import { Router } from '@angular/router'
import { CurrencyPipe } from '@angular/common'

@Component({
  selector: 'app-ad-card',
  templateUrl: './ad-card.component.html',
  styleUrls: ['./ad-card.component.scss']
})

export class AdCardComponent {
  constructor(private router: Router) {
  }
  @Input() public ad!: IAd

  onAdClick() {
    this.router.navigate(['ad', this.ad.id]).then()
  }
}

@NgModule({
  declarations: [AdCardComponent],
  imports: [CurrencyPipe],
  exports: [AdCardComponent]
})

export class AddCardComponentModule {}
