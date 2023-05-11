import { NgModule } from '@angular/core';
import { ThousandsSeparatorPipe } from './pipes/thousands-separator.pipe';
@NgModule({
  declarations: [ThousandsSeparatorPipe],
  exports: [ThousandsSeparatorPipe],
})
export class SharedModule { }
