export interface IClaim {
  issuer: string | null
  originalIssuer: string | null
  properties: null
  nullable: true
  subject: ClaimsIdentity
  type: string | null
  value: string | null
  valueType: string | null
}

export interface ClaimsIdentity {
  authenticationType: string | null
  isAuthenticated: boolean
  readOnly: true
  actor: {}
  bootstrapContext: {} | null
  claims: IClaim | null
  label: string | null
  name: string | null
  nameClaimType: string | null
  roleClaimType: string | null
  nullable: true
}

