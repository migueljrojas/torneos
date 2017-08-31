'use strict';

// Constructor
var Produccion = function() {
    var context = $('.produccion');
    var parentBlock = $('.produccion__top__col');
    var leftBlockHeight;
    var rightBlockHeight;
    var distance;
    var windowWidth;

    function blockOverlay() {
        windowWidth = $(window).width();

        if ( windowWidth > 767 ){

            leftBlockHeight = $('.produccion__top__highlight').height();
            rightBlockHeight = $('.produccion__top__text__block').height();
            distance = rightBlockHeight - leftBlockHeight - 20;
            parentBlock.css({
                'transform': 'translateY(-' + distance + 'px)',
                'margin-bottom': '-' + (distance - 40) + 'px'
            });
        } else {
            parentBlock.css({
                'transform': 'translateY(0)',
                'margin-bottom': '40px'
            });
        }
    }

    if (context) {
        var doOverlay = _.debounce(blockOverlay, 200);
        $(window).resize(doOverlay);

        blockOverlay();
    }
};

module.exports = Produccion;
