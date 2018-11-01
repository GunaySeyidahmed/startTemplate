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
    $('.brand-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $(window).scroll(function(){

        if ($(this).scrollTop() > 100) {

            $('.scrollup').fadeIn();

        } else {

            $('.scrollup').fadeOut();

        }

    });

    $('.scrollup').click(function(){

        $("html, body").animate({ scrollTop: 0 }, 600);

        return false;

    });


});
