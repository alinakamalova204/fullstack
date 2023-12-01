const cartWrapper = document.querySelector('.cart-wrapper');
//добавление товара в корзину
window.addEventListener('click', function (event) {
    //проверка что клик по кнопке "в корзину"
    if (event.target.hasAttribute('data-cart')) {
        //находим карту товара внутри которой был совершен клик
        const card = event.target.closest('.card');

        //собираем данные с этого товара
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText
        };

        //проверим наличие товра уже в корзине. чтобы не дублировать одинаковые элементы
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);


        //если товар уже в корзине
        if (itemInCart) {
            const countElem = itemInCart.querySelector('[data-counter]');
            countElem.innerText = parseInt(countElem.innerText) + parseInt(productInfo.counter);
        } else {
            const cartItem = `<div class="cart-item" data-id="${productInfo.id}">
                                <div class="cart-item__top">
                                    <div class="cart-item__img">
                                        <img src="${productInfo.imgSrc}" alt="">
                                    </div>
                                    <div class="cart-item__desc">
                                        <div class="cart-item__title">${productInfo.title}</div>
                                        <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

                                        <!-- cart-item__details -->
                                        <div class="cart-item__details">

                                            <div class="items items--small counter-wrapper">
                                                <div class="items__control" data-action="minus">-</div>
                                                <div class="items__current" data-counter="">${productInfo.counter}</div>
                                                <div class="items__control" data-action="plus">+</div>
                                            </div>

                                            <div class="price">
                                                <div class="price__currency">${productInfo.price}</div>
                                            </div>
                                        </div>
                                        <!-- // cart-item__details -->
                                            <div class="remove-cart">
                                                <button class="btn-remove" data-action="remove">Удалить</button>
                                            </div>
                                    </div>
                                </div>
                            </div>`;
            //отобразим в корзине
            cartWrapper.insertAdjacentHTML('beforeend', cartItem);
        }
        //сбрасываем счетчик добавленного товара на 1
        card.querySelector('[data-counter]').innerText = '1';
//отображение статуса корзины пустая или полная
        toggleCartStatus();
        //пересчет стоимости
        priceFoodAndDelivery();
    }
})