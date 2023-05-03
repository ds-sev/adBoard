import { IClaim } from './claim'

export interface User {
  id: string
  login: string
  email: string
  isBlocked: boolean
  isAuthenticated: boolean
  scheme: string | null
  claims: IClaim | null
  // password: string
}
