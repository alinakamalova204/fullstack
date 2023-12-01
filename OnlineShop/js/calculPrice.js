//рассчет цены
function priceFoodAndDelivery(){
    const cartItems = document.querySelectorAll('.cart-item');
    let totalPrice = 0;
    cartItems.forEach(function (item) {
        const amountElem = item.querySelector('[data-counter]'); //ищем по аттрибуту <div class="items__current" data-counter="">${productInfo.counter}</div>
        const priceElem = item.querySelector('.price__currency'); //ищем по классу

        const currPrice = parseInt(amountElem.innerText) * parseInt(priceElem.innerText);
        totalPrice += currPrice;

    })
    const totalPriceHtml = document.querySelector('.total-price');
    totalPriceHtml.innerText = totalPrice;

    const cartDelivery = document.querySelector('[data-cart-delivery]');
    if (totalPrice > 0){
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add('none');
    }

    //считаем стоимость доставки
    const deliveryCost = document.querySelector('.delivery-cost');
    if (totalPrice >= 600){
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '200'
    }
}