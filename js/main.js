/* global $, alert, console */
$(function () {
    'use strict';
   
    /* ---- [Main JS Codes] ----
    :; 1.0 Basic JS Code 
    :: 2.0 Preloader JS Code
    :: 3.0 Navbar JS Code
    :: 4.0 Counter Up JS code
    :: 5.0 Pricing Plan JS Code
    :: 6.0 Footer Reveal JS Code 
    -------------------------- */
 
    // :: 1.0 Basic JS Code
    $('a[href="#"]').click(function (e) {
        e.preventDefault()
    });
    
    // :: 2.0 Preloader JS Code
    $(window).on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });
   
    // :: 3.0 Navbar JS Code
    $(window).on('scroll', function () {
        $(window).scrollTop() > 500 ? $('nav').addClass('navbar-show') : $('nav').removeClass('navbar-show');
    });
    // Navbar Links 
    $('.navbar-nav li a').click(function () {
        $('html,body').animate({
            scrollTop: $('#'+$(this).data('value')).offset().top - 50
        },900);
    });
   
    // :: 4.0 Counter Up JS Code
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });
   
    // :: 5.0 Pricing Plan JS Code
    $('.single-price-plan').on('mouseenter', function () {
        $(this).addClass('active').parent().siblings().children().removeClass('active');
    });
  
    // :: 6.0 Footer Reveal JS Code
    $('footer').footerReveal({
        shadow: true,
        shadowOpacity: 0.3,
        zIndex: -101
    });
});