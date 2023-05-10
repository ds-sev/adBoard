import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandsSeparator'
})
export class ThousandsSeparatorPipe implements PipeTransform {

  transform(value: number): string {
    return parseFloat(value.toFixed(2)).toLocaleString()
  }

}
