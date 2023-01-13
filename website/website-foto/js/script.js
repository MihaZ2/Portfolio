
function loadStartAnimation() {

  setTimeout(() => {

    let tl = gsap.timeline({ repeat: 0, repeatDelay: 1 });

    tl.to(".hero__title, .hero__btn", {
      opacity: 1,
      y: 0,
      duration: 0.5,
    });

    tl.to(".hero__descr", {
      opacity: 1,
      duration: 0.5,
    });

    tl.to(".photos-1", {
      opacity: 1,
      scale: 1,
      duration: 0.2,
    });

    tl.to(".photos-2", {
      opacity: 1,
      scale: 1,
      duration: 0.2,
    });

    tl.to(".photos-3", {
      opacity: 1,
      scale: 1,
      duration: 0.2,
    });

    tl.to(".photos__author", {
      opacity: 1,
      duration: 0.5,
    });

  }, 1000);

};

const openMenu = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close');

var tl = gsap.timeline({ paused: true });

tl.to(".burger", {
  opacity: 0,
  duration: 0.2,
});

tl.fromTo(".menu__top",
  {
    y: -50,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
  });

tl.to(".close", {
  opacity: 1,
  duration: 0.2,
});

tl.fromTo(".menu__container", {
  y: 100,
},
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
  });

tl.to(".menu__right, .social", {
  opacity: 1,
  y: 0,
  duration: 0.3,
});

openMenu.onclick = () => {

  setTimeout(() => {

    menu.setAttribute('style', 'display: block;')

  }, 500);

  tl.play();
}

closeMenu.onclick = () => {

  tl.reverse();

  setTimeout(() => {

    menu.setAttribute('style', 'display: none;');

  }, 2600);
}

loadStartAnimation();

