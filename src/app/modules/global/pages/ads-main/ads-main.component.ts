import { Component, Input } from '@angular/core'
import { IAd } from '../../../../models/ad'

@Component({
  selector: 'app-ads-main',
  templateUrl: './ads-main.component.html',
  styleUrls: ['./ads-main.component.scss'],
})
export class AdsMainComponent {
  @Input() pageTitle!: string
  @Input() adsList!: IAd[];
}
