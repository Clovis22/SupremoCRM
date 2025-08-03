const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container img", {
  duration: 1000,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content h3", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__content .about__grid", {
  ...scrollRevealOption,
  delay: 2000,
});

// contact container
ScrollReveal().reveal(".contact__image img", {
  ...scrollRevealOption,
  origin: "left",
});

const swiper_one = new Swiper("#swiper__one", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
});

document.querySelector('.arrow-left-one').addEventListener('click', function() {
  swiper_one.slideNext(); // For next slide
});

document.querySelector('.arrow-right-one').addEventListener('click', function() {
  swiper_one.slidePrev(); // For previous slide
});

document.querySelector('.swiper-button-prev-destaques').addEventListener('click', function() {
  swiper_one.slideNext(); // For next slide
});

document.querySelector('.swiper-button-next-destaques').addEventListener('click', function() {
  swiper_one.slidePrev(); // For previous slide
});

const swiper_two = new Swiper("#swiper__two", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
});

document.querySelector('.arrow-left-two').addEventListener('click', function() {
  swiper_two.slideNext(); // For next slide
});

document.querySelector('.arrow-right-two').addEventListener('click', function() {
  swiper_two.slidePrev(); // For previous slide
});

document.querySelector('.swiper-button-prev-exclusivos').addEventListener('click', function() {
  swiper_two.slideNext(); // For next slide
});

document.querySelector('.swiper-button-next-exclusivos').addEventListener('click', function() {
  swiper_two.slidePrev(); // For previous slide
});