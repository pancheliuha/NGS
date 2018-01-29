module.exports = function () {
    var bannerTexts = $('.banner-text-wrapper').find('.banner-text'),
        activeText = $('.banner-text-wrapper').find('.banner-text.active');


    setInterval(function () {
        bannerTexts.each(function (index, text) {
            if ($(text).hasClass('active')) {
                $(text).removeClass('active');
                console.log($(text).next().length);
                var next = ($(text).next().length) ? $(text).next() : $(bannerTexts[0]);

                next.addClass('active');
            }
        });
    }, 2000);


};