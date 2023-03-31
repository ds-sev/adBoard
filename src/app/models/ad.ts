export interface IAd {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image?: string,
  rating: IAdRating
}

export interface IAdRating {
  rate: number,
  count: number
}


