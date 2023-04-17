//добавление и удаление оповещений в интерфейсе
import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { AlertType, IAlert } from '../../../models/alert'
import { Subscription } from 'rxjs'
import { NavigationStart, Router } from '@angular/router'
import { AlertService } from '../../../services/alert.service'

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() id = 'alert'
  @Input() fade = true

  alerts: IAlert[] = []
  alertSubscription!: Subscription
  routeSubscription!: Subscription

  constructor(
    private _router: Router,
    private _alertService: AlertService
  ) {}

  ngOnInit() {
    //подписка на уведомления об ошибках валиации
    this.alertSubscription = this._alertService.onAlert(this.id)
    .subscribe(alert => {
      //очищаем ошибки, если нет сообщений об ошибках
      if (!alert.message) {
        //отфильтровываем ошибки, которые не должны сбрасываться после изменения роута
        this.alerts = this.alerts.filter(x => x.keepAfterRouteChange)

        this.alerts.forEach(x => delete x.keepAfterRouteChange)
        return
      }
      //добавляем ошибку в массив
      this.alerts.push(alert)
      //автоматическое закрытие уведомления об ошибке
      if (alert.autoClose) {
        setTimeout(() => this.removeAlert(alert), 2000)
      }

    })
    //очищаем ошибки при изменении расположения
    this.routeSubscription = this._router.events.subscribe(evt => {
      if (evt instanceof NavigationStart) {
        this._alertService.clear(this.id)
      }
    })

  }

  ngOnDestroy() {
    this.alertSubscription.unsubscribe()
    this.routeSubscription.unsubscribe()
  }

  removeAlert(alert: IAlert) {
    //eсли ошибка уже удалена, то отменить появление ошибки при автозакрытии
    if (!this.alerts.includes(alert))
      return
    if (this.fade) {
      //затухание ошибки
      alert.fade = true
      //удалить ошибку после затухания

      setTimeout(() => {
        this.alerts = this.alerts.filter(x => x !== alert)
      }, 250)
    } else {
      //удалить предупреждение
      this.alerts = this.alerts.filter(x => x !== alert)
    }
  }

  cssClass(alert: IAlert) {
    if (!alert) return
    const classes = ['alert', 'alert-dismissible', 'mt-4', 'container']

    const alertTypeClass = {
      [AlertType.Success]: 'alert-success',
      [AlertType.Error]: 'alert-danger',
      [AlertType.Info]: 'alert-info',
      [AlertType.Warning]: 'alert-warning',
    }

    if (alert.type !== undefined) {
      classes.push(alertTypeClass[alert.type])
    }

    if (alert.fade) {
      classes.push('fade')
    }
    return classes.join(' ')
  }



}
