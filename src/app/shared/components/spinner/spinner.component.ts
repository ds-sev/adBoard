import { Component } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner'
import { NgIf } from '@angular/common'
import { LoadingService } from '../../../services/loading.service'

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  standalone: true,
  imports: [ProgressSpinnerModule, NgIf]
})
export class SpinnerComponent {
  constructor(
    public loading: LoadingService
  ) {
  }

}
