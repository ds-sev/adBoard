import { Component } from '@angular/core'
import { IAd } from '../../models/ad'
import { example } from '../../services/example'
import { DialogService } from 'primeng/dynamicdialog'
import { Router } from '@angular/router'

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.scss']
})
export class MyAdsComponent {
  constructor(private _router: Router) {
  }
  ads: IAd[] = example
  onNewAdBtnClick() {

      this._router.navigate(['new-ad']).then()
  }
}




