// menu controls

let menuBtn = document.getElementById('menu-bars');
let navB = document.querySelector('header .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navB.classList.toggle('active');
}

// search controls

let searchBtn = document.getElementById('search-icon');
let closeBtn = document.getElementById('close');
let searchForm = document.querySelector('#search-form');

searchBtn.onclick = () => {
    searchForm.classList.add('active');
    navB.classList.remove('active');
    menuBtn.classList.remove('fa-times');
}

window.onscroll = () => {
    menuBtn.classList.remove('fa-times');
    navB.classList.remove('active');
}

closeBtn.onclick = () => {
    searchForm.classList.remove('active');
}

// swiper

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });

  // active navbar

  const links = document.querySelectorAll('.navbar a');