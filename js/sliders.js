const mainSlider = new Swiper('.slider--wrap', {
    pagination: {
        el: ".slider__dots",
        clickable: true,
    },
})

const popularSlider = new Swiper('.popular__slider-wrap', {
    spaceBetween: 60,
    // slidesPerView: 'auto',
    pagination: {
        el: ".popular__slider-pag",
        clickable: true,
    },
    navigation: {
        prevEl: '.pop__prev',
        nextEl: '.pop__next'
    },
    loop: true,
    slidesPerView: 3,
})

const carouselTop = new Swiper('.carousel-top', {
    spaceBetween: 24,
    loop: true,
    slidesPerView: 'auto',
    autoplay: {
        enabled: true,
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true
    },
    speed: 4000,
})

const carouselBottom = new Swiper('.carousel-bottom', {
    loop: true,
    loopedSlides: 55,
    spaceBetween: 24,
    slidesPerView: 'auto',
    autoplay: {
        enabled: true,
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 4000,
})

const auctionSlider = new Swiper('.auctions__slider-wrap', {
    direction: 'vertical'
})