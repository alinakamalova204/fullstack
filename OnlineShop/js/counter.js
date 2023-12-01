//кнопки + - увеличение количества
window.addEventListener('click',function (event) {
//объявление переменной для счетчика
    let counter;

    //проверка клик строго по кнопкам
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        //находим обертку компонента и минус и плюс
        const counterWrapper = event.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
    }
    if (event.target.dataset.action === 'plus'){
        counter.innerText = ++counter.innerText;

    } else if (event.target.dataset.action === 'minus'){
        if (counter.innerText > 0){
            counter.innerText = --counter.innerText;
        }

    }
});
