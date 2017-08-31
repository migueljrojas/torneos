'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var main = $('main');
    var footer = $('footer');
    var url = window.location.pathname;
    var urlRegExp = new RegExp(url == '/' ? window.location.origin + '/?$' : url.replace(/\/$/,'') + '$');

    header.addClass('-ontop');

    $('.header__hamburguer').on('click', function(){
        header.toggleClass('-open');
        body.toggleClass('-hideOverflow');
    });

    $(function() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 100) {
                header.removeClass('-ontop');
            } else {
                header.addClass('-ontop');
            }
        });
    });

    // now grab every link from the navigation
    $('.header__menu li a').each(function(){
        // and test its normalized href against the url pathname regexp

        if(urlRegExp.test(this.href.replace(/\/$/,''))){
            $(this).parents('.header__menu li').addClass('-active');
        }
    });
};

module.exports = Header;
