import { ChangeDetectionStrategy, Component, OnChanges, OnInit } from '@angular/core'
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router'
import { filter, map, Observable, of } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {

  loading$: Observable<boolean> = of(false)

  constructor(private router: Router,) {}

  title = 'adBoard'

  ngOnInit() {

    console.log(this.loading$.pipe())
    console.log(this.loading$)
    console.log(NavigationEnd)
    console.log(NavigationStart)






    this.router.events.pipe(
      filter(
        (e) =>
          e instanceof NavigationStart ||
          e instanceof NavigationEnd ||
          e instanceof NavigationCancel ||
          e instanceof NavigationError
      ),
      map((e) => e instanceof NavigationStart)
    )
    .subscribe(console.log)
  }

}

