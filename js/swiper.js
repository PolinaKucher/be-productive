export const swiper = new Swiper(".features__slider", {
  slidesPerView: 3,
  spaceBetween: 20,
  enabled: false,
  autoplay: {
    delay: 3000,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: false,
  },
  breakpoints: {
    1250: {
      loop: false,
      enabled: false,
      slidesPerView: "auto",
      spaceBetween: 20,
      speed: 10,
    },
    320: {
      loop: true,
      enabled: true,
      slidesPerView: 2,
    },
  },
});
