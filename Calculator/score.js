window.addEventListener('click', function (event){
    if (event.target.dataset.action === 'plus'){
        console.log('plus')
    } if (event.target.dataset.action === 'minus'){
        console.log('minus')
    } if (event.target.dataset.action === 'equally') {
        console.log('equally')
    }
})