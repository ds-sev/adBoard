import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizedRoutingModule } from './authorized-routing.module';
import { MyAdsComponent } from './pages/my-ads/my-ads.component'
import { NewAdCardComponent } from './components/new-ad-card/new-ad-card.component'
import { AddCardComponentModule } from '../../shared/components/ad-card/ad-card.component'
import { NewAdComponent } from './pages/new-ad/new-ad.component'
import { CascadeSelectModule } from 'primeng/cascadeselect'
import { InputTextModule } from 'primeng/inputtext'
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms'
import { DropdownModule } from 'primeng/dropdown'
import { InputTextareaModule } from 'primeng/inputtextarea'


@NgModule({
  declarations: [MyAdsComponent, NewAdCardComponent, NewAdComponent],
  imports: [
    CommonModule,
    AuthorizedRoutingModule,
    AddCardComponentModule,
    CascadeSelectModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextareaModule
  ],
  // exports: [NewAdComponent]
})
export class AuthorizedModule { }
