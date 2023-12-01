//кнопки + - увеличение количества
window.addEventListener('click',function (event) {
//объявление переменной для счетчика
    let counter;

    //проверка клик строго по кнопкам
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        //находим обертку компонента и минус и плюс в корзине
        const counterWrapper = event.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
    }
    if (event.target.dataset.action === 'plus'){
        //сделано для любого плюса
        counter.innerText = ++counter.innerText;

    }
    if (event.target.dataset.action === 'minus'){
        //умеьшение колва для любого минуса на странице
        if (parseInt(counter.innerText) > 1){
            counter.innerText = --counter.innerText;

            //проверка товара в корзине и нажатие кнопки минуса в корзине
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1){
            event.target.closest('.cart-item').remove();

            toggleCartStatus();
        }
    }
    if (event.target.dataset.action === 'remove'){
        event.target.closest('.cart-item').remove();

        toggleCartStatus();
    }
});
