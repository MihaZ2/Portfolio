
// slider
const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,

  autoplay: {
    delay: 10000,
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

});

// tabs
// переход по клику
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.work___btn').forEach(function (e) {
    e.addEventListener('click', function (e) {
      const tab = e.currentTarget.dataset.path;
      document.querySelectorAll('.tab-content').forEach(function (e) {
        e.classList.remove('tab-content--active');
        document.querySelector(`[data-target='${tab}']`).classList.add('tab-content--active');
      });
    });
    // меняем цвет активной кнопки
    e.addEventListener('click', function (e) {
      const tabDefault = e.currentTarget.dataset.default;
      document.querySelectorAll('.work___btn').forEach(function (e) {
        e.classList.remove('work__btn-default');
        document.querySelector(`[data-default='${tabDefault}']`).classList.add('work__btn-default');
      });
    });

  });
});


// accordion

$( function() {
  $( "#accordion" ).accordion({
    collapsible: true,
    active: false,
  });
} );

// burger

const burgerBtn = document.querySelector('.header__burger');
const menuClose = document.querySelector('.menu-close');
const menuBurger = document.querySelector('.nav');

burgerBtn.addEventListener('click', () =>  {
  menuBurger.classList.add('burger-active');
});

menuClose.addEventListener('click', () =>  {
  menuBurger.classList.remove('burger-active');
});

// search

const searchShow = document.querySelector('.search');
const searchHide = document.querySelector('.search__closed');
const searchBlock = document.querySelector('.header__search');

searchShow.addEventListener('click', () => {
  searchBlock.classList.add('search-active');
});

searchHide.addEventListener('click', () => {
  searchBlock.classList.remove('search-active');
});




