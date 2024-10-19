
const burger = document.querySelector('.burger');
const burgerList = document.querySelector('.burger_list');

burger.onclick = function() {
    burgerList.classList.toggle('add');
}
