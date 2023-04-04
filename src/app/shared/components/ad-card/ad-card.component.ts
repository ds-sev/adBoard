import { Component, Input } from '@angular/core'
import { IAd } from '../../../models/ad'
import { Router } from '@angular/router'

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
