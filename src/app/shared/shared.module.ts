import { NgModule } from '@angular/core';
import { ThousandsSeparatorPipe } from './pipes/thousands-separator.pipe';
@NgModule({
  declarations: [
    ThousandsSeparatorPipe,
  ],
  imports: [],
  exports: [ThousandsSeparatorPipe],
})
export class SharedModule { }
