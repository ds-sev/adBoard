import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendationsComponent } from './pages/recommendations/recommendations.component'
import { RulesComponent } from './pages/rules/rules.component'

// const routes: Routes = [
//   {path: '', redirectTo: 'home', pathMatch: 'full'},
//   {path: 'home', component: RecommendationsComponent},
//   {path: 'rules', component: RulesComponent}
//
// ];

const routes: Routes = [
  {
    path: '', children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: RecommendationsComponent},
      {path: 'rules', component: RulesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalRoutingModule { }
