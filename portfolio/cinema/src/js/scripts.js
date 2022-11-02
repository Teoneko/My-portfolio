$(function() {
    $('.menu__dropdown-opener').on('click', function (e) {
        e.preventDefault;
        $(this).toggleClass('open');
        $('.menu__dropdown-opener__overlay').toggleClass('open');
        $('.menu').toggleClass('open');
        $('.menu__dropdown').toggleClass('open');
    })
});
$(document).ready(function(){
    $('.slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        arrows: true,
        autoplay: false,
        speed: 1500,
        infinite: true,
    });
});