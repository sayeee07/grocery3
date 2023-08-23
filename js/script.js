const searchForm = document.querySelector('.search-form');
const navbar = document.querySelector('.navbar');
const shoppingCart = document.querySelector('.shopping-cart');
const loginForm = document.querySelector('.login-form');

// Search button click behavior
document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
};

// Cart button click behavior
document.querySelector('#cart-btn').onclick = () => {
  shoppingCart.classList.toggle('active');
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
};

// Login button click behavior
document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
  navbar.classList.remove('active');
  shoppingCart.classList.remove('active');
  searchForm.classList.remove('active');
};

// Menu button click behavior
document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  searchForm.classList.remove('active');
};

// Window scroll behavior
window.onscroll = () => {
  navbar.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  searchForm.classList.remove('active');
};
document.addEventListener("DOMContentLoaded", function () {
  var productSlider = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});





document.addEventListener("DOMContentLoaded", function () {
  var reviewSlider = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});


