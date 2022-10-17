const mainSlider = new Swiper('.slider--wrap', {
    pagination: {
        el: ".slider__dots",
        clickable: true,
    },
})

const popularSlider = new Swiper('.popular__slider-wrap', {
    spaceBetween: 60,
    slidesPerView: 3,
    pagination: {
        el: ".popular__slider-pag",
        clickable: true,
    },
    navigation: {
        prevEl: '.pop__prev',
        nextEl: '.pop__next'
    }
})