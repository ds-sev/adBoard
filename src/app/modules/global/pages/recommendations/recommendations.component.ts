import { Component, Input } from '@angular/core'
import { IAd } from '../../../../models/ad'
import { LoadingService } from '../../../../services/loading.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
})
export class RecommendationsComponent {

  @Input() pageTitle!: string
  @Input() adsList!: IAd[];
  public isLoading!: Observable<LoadingService>

constructor(

) {
}
}
