
const burger = document.querySelector('.click');
const burgerList = document.querySelector('.burger_list');
const close = document.querySelector('.close');

burger.onclick = function() {
    /* console.log("1"); */
    burgerList.classList.add('add');
}

close.onclick = function(){
    console.log('1');
    burgerList.classList.remove('add');
}
