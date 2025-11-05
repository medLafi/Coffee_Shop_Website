const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav-menu .nav-link");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

// close the menu when nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click());
});

// close button event
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

/* Swiper */
const swiper = new Swiper('.slider-wrapper', {
  // optional parameters
  // direction: 'vertical',
  loop: true,
  spaceBetween: 25,
  grabCursor: true,

  // if we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});
const swiper1 = new Swiper('.slider-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});