// burger

const burgerBtn = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-closed');
const menuBurger = document.querySelector('.nav');

burgerBtn.addEventListener('click', () =>  {
  menuBurger.classList.add('burger-active');
});

menuClose.addEventListener('click', () =>  {
  menuBurger.classList.remove('burger-active');
});
