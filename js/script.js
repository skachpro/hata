const burger = document.querySelector('.click');
const burgerList = document.querySelector('.burger_list');
const close = document.querySelector('.close');

burger.onclick = function() {
    burgerList.classList.add('add');
}

close.onclick = function(){
    burgerList.classList.remove('add');
}

