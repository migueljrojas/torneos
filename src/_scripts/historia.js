'use strict';

// Constructor
var Historia = function() {
    var inContext = $('.nosotros');
    var historyItems = $('.nosotros__history__item');

    if (inContext) {
        historyItems.each(function(){
            var $this = $(this);
            var sibling = $this.next('li').length;
            var height = $this.height();
            var distance = $this.next('li').height();
            var leftClass = 'nosotros__history__item--left';
            var rightClass = 'nosotros__history__item--right';
            var year = $this.find('._year').text();
            var change;

            if ( $this.hasClass(leftClass) && $this.next().hasClass(rightClass) || $this.hasClass(rightClass) && $this.next().hasClass(leftClass) ) {
                change = true;
            } else {
                change = false;
            }

            console.log(year);
            console.log('change: ' + change);
            console.log('distance: ' + distance);
            console.log('sibling: ' + sibling);
            console.log('--- End Item ---');

            if (sibling > 0 && distance && distance >= 120 && distance < height && change === true ) {
                $this.css('margin-bottom', '-' + (distance - 50) + 'px');
            }

            // if (sibling.hasClass('nosotros') > 0 && distance && distance >= 150 ) {
            //     $this.css('margin-bottom', '-' + (distance - 50) + 'px');
            // }

        });
    }
};

module.exports = Historia;
