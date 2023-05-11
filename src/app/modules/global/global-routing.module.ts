import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RulesComponent } from './pages/rules/rules.component'
import { HomeComponent } from './pages/home/home.component'
import { FilteredAdsComponent } from './pages/filtered-ads/filtered-ads.component'

const routes: Routes = [
  {
    path: '', children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'rules', component: RulesComponent},
      {path: 'filter', component: FilteredAdsComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GlobalRoutingModule { }
