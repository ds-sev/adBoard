import { Injectable } from '@angular/core'
import { filter, Observable, Subject } from 'rxjs'
import { AlertOptions, AlertType, IAlert } from '../models/alert'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private _subject = new Subject<IAlert>()
  private _defaultId = 'default-alert'

  onAlert(id = this._defaultId): Observable<IAlert> {
    return this._subject.asObservable().pipe(filter(x => x && x.id === id))
  }

  success(message: string, options?: AlertOptions) {
    this.alert(new IAlert({...options, type: AlertType.Success, message}))
  }

  error(message: string, options?: AlertOptions) {
    this.alert(new IAlert({...options, type: AlertType.Error, message}))
  }

  info(message: string, options?: AlertOptions) {
    this.alert(new IAlert({...options, type: AlertType.Info, message}))
  }

  warning(message: string, options?: AlertOptions) {
    this.alert(new IAlert({...options, type: AlertType.Warning, message}))
  }


  alert(alert: IAlert) {
    alert.id = alert.id || this._defaultId
    this._subject.next(alert)
  }

  clear(id = this._defaultId) {
    this._subject.next(new IAlert({ id }))
  }

}
