import { Component, Input } from '@angular/core'
import { IAd } from '../../../../models/ad'

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
})
export class RecommendationsComponent {
  isLoading: boolean = false
  @Input() pageTitle!: string
  @Input() adsList!: IAd[];
}
