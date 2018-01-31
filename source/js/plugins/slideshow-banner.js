module.exports = function () {

    var owl = $(".banner-info-slides").owlCarousel({
        loop: true,
        items: 1,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: false,
        transitionStyle: "fade"
    });

    owl.trigger('refresh.owl.carousel');

    $(window).on('resize', function (e) {
        owl.trigger('refresh.owl.carousel');
    });
};