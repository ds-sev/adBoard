import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendationsComponent } from '../global/pages/recommendations/recommendations.component'

const routes: Routes = [


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
