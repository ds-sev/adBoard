# AdBoard

Angular. SolarLab Academy

## ТЗ 30.03.23:

1.	Создать базовую структуру приложения, сделать модули, страницы, компоненты, настроить роутинг.</br>
2.	Сделать базовую верстку компонентов шапки и поиска. Поиск и выбор категорий можно пока оставить без логики, в шапке сделать базовую логику в виде:</br>
     a.	Если не залогинен:</br>
          i.	По нажатию на войти должно открываться модальное окно входа.</br>
          ii.	По нажатию на «новое объявление» - аналогично открывается окно входа.</br>
     b.	Если залогинен:</br>
          i.	По клику на пользователя открывается менюшка</br>
          ii.	По клику на Новое объявление – происходит редирект на страницу создания</br>
     c.	Т.к. логина как такового пока нет – можете сделать просто булевое поле в компоненте «авторизован-не авторизован»</br>
3.	Сверстать «главную страницу» рекомендованных объявлений на моках, вместо запроса на сервер можете использовать моковые данные по типу:</br>

     *new Array(20).fill({</br>
          id: 0,</br>
          title: 'Гитара фендер',</br>
          price: 20000,</br>
          imgSrc: 'https://placehold.co/600x400',</br>
          createdAt: 'Сегодня 14:12',</br>
          address: 'Москва',</br>
     })</br>*

     Данные должны передаваться в дочерний компонент и отображаться там.</br>
     a.	Если данных нет – отображать соответствующее сообщение пользователю</br>
     b.	Если данные еще грузятся – отображать спиннер или скелетон. Сэмулировать загрузку данных можете любым образом, например через debounceTime или же setTimeout.</br>
     
     


