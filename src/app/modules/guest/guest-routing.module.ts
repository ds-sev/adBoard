import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendationsComponent } from '../global/pages/recommendations/recommendations.component'
import { SignInComponent } from './modals/sign-in/sign-in.component'

const routes: Routes = [
  // {path: 'sign-in', component: SignInComponent},
  // {path: 'sign-up', component: SignInComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
