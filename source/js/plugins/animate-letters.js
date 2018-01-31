module.exports = function () {
    var bannerTexts = $('.banner-text-wrapper').find('.banner-text');

    setInterval(function () {
        var activeText = $('.banner-text-wrapper').find('.banner-text.active');
        activeText.removeClass('active');

        var next = (activeText.next().length) ? activeText.next() : $(bannerTexts[0]);
        next.addClass('active');
        console.log(next);

    }, 2000);


};