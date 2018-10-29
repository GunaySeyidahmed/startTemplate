$( document ).ready(function() {
    $('.slider').slick({
        dots: true,
        infinite: true,
        prevArrow: false,
        nextArrow: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        fade: true,
        cssEase: 'linear'
    });
});