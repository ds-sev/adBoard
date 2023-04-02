import { User } from '../../models/user'
import { Observable } from 'rxjs'

export abstract class UserApi {
  signIn!: (user: User) => Observable<any>
  signOut!: () => Observable<any>
}
