import { Component, Output } from '@angular/core'
import { IAd } from '../../models/ad'
import { Subscription } from 'rxjs'
import { AdsService } from '../../services/ads.service'
import { example } from '../../services/example'

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.scss']
})
export class MyAdsComponent {
  ads: IAd[] = example
}




