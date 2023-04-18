import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {path: '', loadChildren:() => import('./modules/global/global.module').then(m => m.GlobalModule)},
  {path: '', loadChildren:() => import('./modules/guest/guest.module').then(m => m.GuestModule)},
  {path: '', loadChildren:() => import('./modules/authorized/authorized.module').then(m => m.AuthorizedModule)},
  {path: '**', redirectTo: ''}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
