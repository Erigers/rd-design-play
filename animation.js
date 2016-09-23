$(document).ready(function () {
    setTimeout(function () {
        $('.play-holder').addClass('animate-logo');
    }, 500);
    setTimeout(function () {
        $('.play-holder').addClass('rotate-logo');
    }, 1500);
    setTimeout(function () {
        $('.line-shadow').addClass('top-border-display');
    }, 2100);
    setTimeout(function () {
        $('.main-frame').addClass('move-right');
    }, 2400);
    setTimeout(function () {
        $('.text-shadow').addClass('tesha-reducer');
    }, 2600);
    setTimeout(function () {
        $('.text-holder').addClass('teho-up');
    }, 2700);
    setTimeout(function(){
        $('.text-holder').addClass('smaller-font');
    },3000);
    setTimeout(function(){
       $('.play-holder svg').addClass('rotate-a-third');
        $('.main-frame').removeClass('move-right').css('margin-left','-9px').css('margin-top','78px');
    },3000);

    // round 2
    setTimeout(function(){
        $('.line-shadow2').addClass('top-border-display');
    },3300);
    setTimeout(function(){
        $('.main-frame').css('margin-left',"0px");
    },3600);
    setTimeout(function () {
        $('.text-shadow2').addClass('tesha-reducer');
    }, 3800);
    setTimeout(function () {
        $('.text-holder2').addClass('teho-up');
    }, 3900);
    setTimeout(function(){
        $('.text-holder2').addClass('smaller-font');
    },4200);
    setTimeout(function(){
        $('.play-holder svg').addClass('rotate-another-third');
    }, 4200);


});
