import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs'
import { LoadingService } from '../../services/loading.service'

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  private _totalRequests: number = 0

  constructor(
    private loadingService: LoadingService
  ) {}

  intercept(request: HttpRequest<unknown>,
    next: HttpHandler): Observable<HttpEvent<unknown>> {
    this._totalRequests++
    this.loadingService.setLoading(true)
    return next.handle(request).pipe(
      finalize(() => {
        this._totalRequests--
        if (this._totalRequests === 0) {
          this.loadingService.setLoading(false)
        }
      })
    )
  }
}
