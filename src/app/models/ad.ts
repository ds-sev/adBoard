import { ICategory } from './category'

export interface IAd {
  id?: string,
  name: string,
  description: string,
  price?: number,
  imageUrl?: string,
  address: string,
  createdAt: string,
  isActive: boolean,
  categoryId: string
}


