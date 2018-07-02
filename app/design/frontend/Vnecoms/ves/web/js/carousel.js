// Script to initialise any element with the .slider-class-or-id-here class
//
// DEPENDENCIES
// Depends on jQuery and bootstrap-carousel (which is defined in app/design/frontend/*VENDOR*/*THEME*/requirejs-config.js)

define(['jquery', 'bootstrap-carousel'], function($) {
    $('.carousel').carousel({
        interval: 3000
    });
});