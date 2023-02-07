# Task-2.3-Online-market-OOP
Задание 1
В отдельном файле с расширением .js напишите программу, включающую в себя:

Определения классов:
Good - класс для хранения данных о товаре со свойствами:
        id            Код товара
        name          Наименование
        description   Описание
        sizes         массив возможных размеров
        price         цена товара
        available     Признак доступности для продажи
Реализауйте в Good следующие методы:

        constructor()   конструктор экземпляра товара принимающий параметры соответствующие свойствам выше
        setAvailable()  изменение признака доступности для продажи
Далее предполагается, что в каждом классе необходимо также реализовать конструктор.

GoodsList - класс для хранения каталога товаров со свойствами:
        #goods       массив экземпляров объектов класса Good (приватное поле)
        filter       регулярное выражение используемое для фильтрации товаров по полю name
        sortPrice    булево значение, признак включения сортировки по полю Price
        sortDir      булево значение, признак направления сортировки по полю Price (true - по возрастанию, false - по убыванию)
Реализуйте в GoodsList геттер и методы:

        get list()     возвращает массив доступных для продажи товаров в соответствии с установленным фильтром и сортировкой по полю Price
        add()          добавление товара в каталог
        remove(id)     удаление товара из каталога по его id

Для фильтрации и сортировки используйте функции массивов filter и sort с передачей в них соответствующих стрелочных функций.

Для проверки соответствия поля name регулярному выражению в фильтре, используйте такую конструкцию filter.test(good.name). При этом в поле filter должно быть записано регулярное выражение, описываемое в JS как:

        /<regexp>/<flags>
подробнее с регулярными выражениями в JavaScript можно познакомиться здесь: https://learn.javascript.ru/regular-expressions

BasketGood - класс дочерний от Good, для хранения данных о товаре в корзине с дополнительным свойством:
        amount      количество товара в корзине
В конструктор данного класса в качестве параметра должен передаваться экземпляр класса Good (товар помещаемый в корзину), значения свойств которого должны использоваться при вызове конструктора родительского класса super().

Basket - класс для хранения данных о корзине товаров со свойствами:
        goods       массив объектов класса BasketGood для хранения данных о товарах в корзине
Реализуйте геттеры:

        get totalAmount()  возвращает общую стоимость товаров в корзине
        get totalSum()     возвращает общее количество товаров в корзине
При реализации геттеров используйте методы массивов, такие как reduce() и forEach().

Реализуйте методы:

        add(good, amount)    Добавляет товар в корзину, если товар уже есть увеличивает количество
        remove(good, amount) Уменьшает количество товара в корзине, если количество становится равным нулю, товар удаляется
        clear()              Очищает содержимое корзины
        removeUnavailable()  Удаляет из корзины товары, имеющие признак available === false (использовать filter())
В основном коде программы создайте не менее 5 экземпляров класса Good. Создайте экземпляры классов GoodsList и Basket. Вызовите несколько раз реализованные методы этих объектов с необходимыми аргументами, устанавливая условия фильтрации и сортировки для GoodsList. Выведите в консоль отфильтрованный и сортированный каталог товаров, а также значения общих суммы и количества товаров в корзине.