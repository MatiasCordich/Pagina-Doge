
const hamburger = document.querySelector('.hamburger-btn');
const enlaces = document.querySelector('.navbar__links');
const button = document.querySelector('.navbar__button');

hamburger.addEventListener('click', () =>{
    enlaces.classList.toggle('activado');
    button.classList.toggle('activado');
})