const swiperConfig = {
  // Opções de configuração
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
   keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 1,
  spaceBetween: 32,
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2
    }
  }
}

const swiper = new Swiper('.swiper', swiperConfig)