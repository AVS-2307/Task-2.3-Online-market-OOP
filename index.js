class Good {
    constructor(id, name, description, sizes, price, available) {
        this.id = id
        this.name = name
        this.description = description
        this.sizes = sizes
        this.price = price
        this.available = true
    }

    // изменение признака доступности для продажи

    /**
     * @param {boolean} newValue
     */    
    set setAvailable(newValue) {
        return this.available = newValue
    }
}

/*Проверка работы создания экземпляра класса Good 
Создание экземпляров класса Good */
const Item1 = new Good(1, 'Кроссовки', 'спортивная обувь', [41, 42, 43], 5500, true)
const Item2 = new Good(2, 'Сапоги женские', 'осенняя обувь', [34, 35, 36], 7500, true)
const Item3 = new Good(3, 'Тапочки', 'аксессуары для ванной', [41, 42, 43], 1500, true)
const Item4 = new Good(4, 'Детские ботинки', 'спортивная обувь', [21, 22, 23, 24, 25], 4500, true)
const Item5 = new Good(5, 'Ботинки мужские', 'осенняя обувь', [41, 42, 43], 6500, true)

//console.log(Item1, Item2, Item3, Item4, Item5)

 //Проверка работы метода setAvailable
/* let q = Item1.setAvailable = false
console.log(Item1) */


// класс для хранения каталога товаров со свойствами
class GoodsList {

    #goods = []

    constructor(goods, filter, sortPrice, sortDir) {
        this.#goods = goods
        this.filter = new RegExp("","i"); 
        this.sortPrice = sortPrice
        this.sortDir = sortDir
    }

    //возвращает массив доступных для продажи товаров в соответствии с установленным фильтром и сортировкой по полю Price

    get list() {
        this.temp = this.#goods.filter(good => this.filter.test(good.name))
        if (this.sortPrice) {
            if (this.sortDir) {
                this.temp.sort((item1, item2) => item1.price - item2.price)
            } else {
                this.temp.sort((item1, item2) => item2.price - item1.price)
            }
        }
        return this.temp
    }
    

    // добавление товара в каталог
    add = (newGood) => (this.#goods.push(newGood))
    


    //удаление товара из каталога по его id
    remove = (goodId) => {
        
        for(let i=0; i< basket.length; i++) {
            if (this.#goods[id] === goodId) {
                this.#goods.splice(i,1)
            }
        }
        return this.goods        
    }

}

/* Проверка добавления товара в каталог 

Создание массива товаров */
const goodsAll = [];
goodsAll.push(Item1);
goodsAll.push(Item2);
goodsAll.push(Item3);
goodsAll.push(Item4);

//console.log(goodsAll)

// Фильтр
const newCatalog = new GoodsList(goodsAll, /'тап'/i, true, true);
//console.log(newCatalog.list)

class BasketGood extends Good {

    constructor(id, name, description, sizes, price, available, amount) {
        super(id, name, description, sizes, price, available)
        this.amount = amount
    }
}

class Basket {

    constructor() {
        this.goods = []                
    }

    //возвращает общее количество товаров в корзине
    get totalAmount() {
        let sumAmount = 0
        this.goods.forEach(good => {sumAmount += good.amount})
        return sumAmount
    }

    //возвращает общую стоимость товаров в корзине
    get totalSum() {
        return this.goods.reduce((sum, good) => 
            {sum += good.price*good.amount
                return sum}, 0)
    }

    //Добавляет товар в корзину, если товар уже есть - увеличивает количество
    add (good, amount) {
        let i = this.goods.findIndex(value => value.id === good.id)

        if (i >= 0) {
            this.goods[i].amount += amount
            
        }
        else {
            let addProduct = new BasketGood(
                good.id,
                good.name,
                good.description,
                good.sizes,
                good.price,
                good.available,
                amount
            );
            this.goods.push(addProduct);
        }
    }
    // Уменьшает количество товара в корзине, если количество становится равным нулю, товар удаляется
    remove(good, amount) {
        let i = this.goods.findIndex(value => value.id === good.id)

        if (i >= 0) {
            if (this.goods[i].amount - amount <= 0 || amount === 0) {
                this.goods.splice(i, 1);
            }
            else {
                this.goods[i].amount -= amount;
            }
        }
    }
    

    //очистка корзины
    clear() {
        this.goods.length = 0        
    }

    // Удаляет из корзины товары, имеющие признак available === false (использовать filter())
    removeUnavailable() {
        this.goods = this.goods.filter(good => good.available === true);
        return this.goods;
    }
}

// создание экземпляров товаров для корзины
const newBasketItem1 = new BasketGood(Item1, 3);
const newBasketItem2 = new BasketGood(Item2, 5);
const newBasketItem3 = new BasketGood(Item3, 2);
const newBasketItem4 = new BasketGood(Item4, 7);
//console.log(newBasketItem1, newBasketItem2, newBasketItem3, newBasketItem4)

// проверка работы функций корзины

let basket_new = new Basket()

//добавление товаров
basket_new.add(Item1, 5)
basket_new.add(Item3, 3)
basket_new.add(Item3, 3)

console.log(basket_new)

//общее кол-во товаров и общая стоимость

console.log(`Общее кол-во товаров в корзине: ${basket_new.totalAmount}`)
console.log(`Общая сумма товаров в корзине: ${basket_new.totalSum}`)

//удаление товаров
//basket_new.remove(Item3, 5)

//console.log(basket_new)

//очищение корзины
//basket_new.clear
//console.log(basket_new)

//удаление из корзины товары, имеющие признак available === false
//basket_new.removeUnavailable()
//раскомментировать строки 31-32, запустить код. В корзине Item1 отсутствует
//console.log(basket_new.removeUnavailable())

