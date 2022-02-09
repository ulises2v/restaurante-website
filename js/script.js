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

closeBtn.onclick = () => {
  searchForm.classList.remove('active');
}

// -----------------------------------------------------
// ver tutorial scrollspy javascript en:
// https://www.youtube.com/watch?v=fAAk9CATILc
// --------------------------------------------------------

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
    menuBtn.classList.remove('fa-times');
    navB.classList.remove('active');

    section.forEach(sec => {

      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
        });
      }

    });
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

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }
  });

  // loader container

  function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
  }

  function fadeOut() {
    setInterval(loader, 3000);
  }

  window.onload = fadeOut();