const btnMinus = document.querySelector('[data-action="minus"]'); //ищем по дата-атрибуту
const btnPlus = document.querySelector('[data-action="plus"]');
const counter_0 = document.querySelector('[data-counter_0]');
btnMinus.addEventListener('click', function (){
    if (parseInt(counter_0.innerText) > 0) {
        counter_0.innerText = --counter_0.innerText;
    }
});
btnPlus.addEventListener('click',function (){
    counter_0.innerText = ++counter_0.innerText;
});