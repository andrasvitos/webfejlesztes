$(document).ready(function () {
    $(".center").slick({
        dots: false,
        arrows: true,
        infinite: true,
        centerMode: true,
        centerPadding: '160px',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 6000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerPadding: '30px',
                    slidesToShow: 1,
                    dots: false,
                    fade: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: true,
                    centerPadding: '30px',
                    slidesToShow: 1,
                    dots: false,
                    fade: true,
                }
            }
        ]
    });
});