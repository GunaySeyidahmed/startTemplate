$(document).ready(function () {

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
        slidesToScroll: 6,
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
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $('.scroll-up').fadeIn("slow").css("display", "block");
        } else {
            $('.scroll-up').fadeOut("slow").css("display", "none");
        }
    });
    $(".scroll-up").click(function (event) {
        event.preventDefault();
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });
    $('#footer-tab').toggle(function () {
            $("#copy-down").slideUp();
            console.log("show")
        },
        function () {
            $("#copy-down").slideDown();
            console.log("show")
        }
    )
});
