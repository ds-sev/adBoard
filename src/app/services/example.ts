import { IAd } from '../models/ad'

export const example: IAd[] = [
  {
    id: '1543453',
    name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    description: 'This is description',
    price: 109.95,
    imageUrl: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    address: 'г. Бобруйск',
    createdAt: `${Date.now()}`,
    isActive: true,
    categoryId: "323c7129-7b4d-4876-a553-742099b6829d"
  },
  {
    id: '155232',
    name: 'Гитара фендер',
    description: 'This is description',
    price: 20000,
    imageUrl: '/assets/images/cards-examples/guitar.jpg',
    address: 'г. Ейск',
    createdAt: '2007',
    isActive: true,
    categoryId: "323c7129-7b4d-4876-a553-742099b6829d"
  },
  {
    id: '1234234',
    name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    description: 'This is description',
    price: 109.95,
    imageUrl: '/assets/images/cards-examples/girl.jpg',
    address: 'с. Бельдяшки',
    createdAt: `${Date.now()}`,
    isActive: true,
    categoryId: "323c7129-7b4d-4876-a553-742099b6829d"
  }
]




