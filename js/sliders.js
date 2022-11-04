const mainSlider = new Swiper('.slider--wrap', {
    pagination: {
        el: ".slider__dots",
        clickable: true,
    },
})

if (window.screen.width > 999) {
    const popularSlider = new Swiper('.popular__slider-wrap', {
        spaceBetween: 60,
        pagination: {
            el: ".popular__slider-pag",
            clickable: true,
        },
        navigation: {
            prevEl: '.popular .pop__prev',
            nextEl: '.popular .pop__next'
        },
        loop: true,
        slidesPerView: 3
    })

    const likeSlider = new Swiper('.like__slider', {
        spaceBetween: 60,
        navigation: {
            prevEl: '.likely .pop__prev',
            nextEl: '.likely .pop__next'
        },
        loop: true,
        slidesPerView: 3
    })
}

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
    loop: true,
    direction: 'vertical',
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        enabled: true,
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 4000,
})