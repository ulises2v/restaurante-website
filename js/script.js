// menu controls

let menuBars = document.getElementById('menu-bars');
let navB = document.querySelector('header .navbar');

menuBars.onclick = () => {
    menuBars.classList.toggle('fa-times');
    navB.classList.toggle('active');
}