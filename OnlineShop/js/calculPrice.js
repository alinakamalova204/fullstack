//рассчет цены
function priceFoodAndDelivery(){
    const cartItems = document.querySelectorAll('.cart-item');
    let Price = 0;

    cartItems.forEach(function (item) {
        const amountElem = item.querySelector('[data-counter]'); //ищем по аттрибуту <div class="items__current" data-counter="">${productInfo.counter}</div>
        const priceElem = item.querySelector('.price__currency'); //ищем по классу

        const currPrice = parseInt(amountElem.innerText) * parseInt(priceElem.innerText);
        Price += currPrice;

    })
    //сумма заказа
    let orderPriceHtml = document.querySelector('.order-price');
    orderPriceHtml.innerText = Price;

    //показывает или  скрывает блок "корзина пуста"
    const cartDelivery = document.querySelector('[data-cart-delivery]');
    if (orderPriceHtml > 0){
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add('none');
    }

    //считаем итог стоимость доставки + заказ
    const totalPrice = document.querySelector('.total-price');
    if (orderPriceHtml.innerText >= 600){
        totalPrice.innerText = orderPriceHtml.innerText;
    } else {
        totalPrice.innerText = parseInt(orderPriceHtml.innerText) + 200;
    }
}