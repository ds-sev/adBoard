const exampleCards = [
  {
    id: 321,
    title: 'Гитара Fender',
    photo: './images/cards-examples/guitar.jpg',
    price: '20 000',
    location: 'Москва, Ленинградский проспект',
    date: 'Сегодня',
    time: `${new Date().getHours()}:${new Date().getMinutes()}`,
    rating: {rate: 3.2, count:245}
  },
  {
    id: 654,
    title: 'Женщина',
    photo: './images/cards-examples/guitar.jpg',
    price: '10 000',
    location: 'Санкт-Петербург, Московский переулок',
    date: 'Вчера',
    time: `${new Date().getHours() - 5}:${new Date().getMinutes()}`,
    rating: {rate: 3.2, count:245}
  },
  {
    id: 987,
    title: 'Айфон 5Г sn12q3423u899',
    photo: 'https://krot.info/uploads/posts/2022-03/1646712150_16-krot-info-p-novii-aifon-prikol-smeshnie-foto-16.jpg',
    price: '34 003',
    location: 'Бобруйск, Ленинградский проспект',
    date: '21.11.2005',
    time: '12:34',
    rating: {rate: 3.2, count:245}
  }]

export default exampleCards




