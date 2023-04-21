import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
moment.locale('ru');

@Pipe({
  name: 'date',
  standalone: true,
})
export class DatePipe implements PipeTransform {

  transform(value: string): unknown {
    return moment(value).fromNow()
  }

}
