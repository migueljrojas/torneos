// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery = require('jquery');
global._ = require('underscore');
var Header = require('../_modules/header/header');
var Slider = require('../_modules/slider/slider');
var VideoReplace = require('./videoReplace');
var Home = require('./home');
var Derechos = require('./derechos');
var Historia = require('./historia');
var Produccion = require('./produccion');

$(function() {
    require('../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min');
    require('../../bower_components/slick-carousel/slick/slick');

    new Home();
    new Derechos();
    new Header();
    new Slider();
    new VideoReplace();
    new Historia();
    new Produccion();
});
