import { Component } from '@angular/core'
import { IAd } from '../../models/ad'
import { example } from '../../services/example'

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.scss']
})
export class MyAdsComponent {
  ads: IAd[] = example
}




