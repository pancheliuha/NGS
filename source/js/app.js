(function($) {
    "use strict";
    var nav_menu = require('./plugins/nav_menu'),
        owl = require('./plugins/owl.carousel'),
        animate_letters = require('./plugins/animate-letters'),
        slideshowBanner = require('./plugins/slideshow-banner');

    nav_menu();
    animate_letters();
    slideshowBanner();
})(jQuery);