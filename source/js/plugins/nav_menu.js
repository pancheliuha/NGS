module.exports = function () {

    //openMenu
    $('.hamburger.mobile').on('click', function (e) {
         $('#header-nav').removeClass('active');
         $('.nav-list.active').removeClass('active');
    });

    $('.hamburger.desktop').on('click', function (e) {
        $('#header-nav').toggleClass('active');
        $('.nav-list.active').removeClass('active');
    });

    //dropdown accordeon
    $('.dropdown-link').on('click', function (event) {
        console.log('click');
        if ($(this).siblings('.nav-list').length) {
            event.preventDefault();
            var currentDropdown = $(this).siblings('.nav-list'),
                openDropdown = $(this).closest('.nav-list').find('.nav-list.active');

            openDropdown.removeClass('active');
            currentDropdown.addClass('active');
            console.log('currentDropdown', currentDropdown, '/', 'openDropdown', openDropdown);
        }
    });


};