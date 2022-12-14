
//Инициализация слайдеров
$(document).ready(function () {
    //Иниц. верт. слайдер изображений на главной , под управлением slider__nav
    $('.vertical-slider__img-box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        draggable:false,
        accessibility: false,
        vertical: true,
        zIndex: 300,
    });

    //Иниц. верт. слайдер тектового блока на главной , под управлением slider__nav
    $('.vertical-slider__text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        draggable:false,
        accessibility: false,
        zIndex: 300,
    });

    //Иниц. slider__nav на главной , управление слайдером изображений , слайдером текстового блока
    $('.vertical-slider__nav-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        asNavFor: '.vertical-slider__text-slider, .vertical-slider__img-box',
        prevArrow: '<button type="button" class="slick-prev"><span class="line"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="line"></span></button>',
        zIndex: 300,

    });

    //Иниц. слайдера товаров , управление slider__nav
    $('#items_slider_hits').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        draggable:true,
        accessibility: false,
        variableWidth: true,
        zIndex: 300,
        asNavFor: '.items-slider__nav-slider',
    });
    $('#items_slider_news').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        draggable:true,
        accessibility: false,
        variableWidth: true,
        zIndex: 300,
        asNavFor: '.items-slider__nav-slider',
    });

    //Иниц. slider__nav слайдера товаров
    $('.items-slider__nav-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        dots:false,
        fade: true,
        asNavFor: '#items_slider_hits, #items_slider_news',
        prevArrow: '<button type="button" class="slick-prev"><span class="line"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="line"></span></button>',
        zIndex: 300,

    });

    //Иниц. слайдера новостей , управление slider__nav
    $('.news-slider__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        draggable:true,
        accessibility: false,
        variableWidth: true,
        zIndex: 300,
        asNavFor: '.news-slider__nav-slider',
    });
    //Иниц. slider__nav слайдера новостей
    $('.news-slider__nav-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        dots:false,
        fade: true,
        asNavFor: '.news-slider__slider',
        prevArrow: '<button type="button" class="slick-prev"><span class="line"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="line"></span></button>',
        zIndex: 300,

    });


    //Иниц. слайдеров коллекций , управление slider__nav
    $('#collections-slider__slider-first').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        draggable:true,
        accessibility: false,
        variableWidth: true,
        zIndex: 300,
        asNavFor: '#collections-slider__nav-slider-first',
    });
    //Иниц. slider__nav слайдера коллекций
    $('#collections-slider__nav-slider-first').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        dots:false,
        fade: true,
        asNavFor: '#collections-slider__slider-first',
        prevArrow: '<button type="button" class="slick-prev"><span class="line"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="line"></span></button>',
        zIndex: 300,

    });


    $('#collections-slider__slider-second').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        draggable:true,
        accessibility: false,
        variableWidth: true,
        zIndex: 300,
        asNavFor: '#collections-slider__nav-slider-second',
    });
    //Иниц. slider__nav слайдера товаров
    $('#collections-slider__nav-slider-second').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        dots:false,
        fade: true,
        asNavFor: '#collections-slider__slider-second',
        prevArrow: '<button type="button" class="slick-prev"><span class="line"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="line"></span></button>',
        zIndex: 300,

    });


    $('#collections-slider__slider-third').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        draggable:true,
        accessibility: false,
        variableWidth: true,
        zIndex: 300,
        asNavFor: '#collections-slider__nav-slider-third',
    });
    //Иниц. slider__nav слайдера товаров
    $('#collections-slider__nav-slider-third').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        dots:false,
        fade: true,
        asNavFor: '#collections-slider__slider-third',
        prevArrow: '<button type="button" class="slick-prev"><span class="line"></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="line"></span></button>',
        zIndex: 300,

    });
});


//Заполнение прогресс бара на слайдере
$(document).ready(function () {
    $('.slick-slider').on('afterChange',
        function () {
            var items = $(this).parents("[class $= slider]").find("[class *= number]").length;
            var progress = $(this).parents("[class $= slider]").find("[class *= number].slick-active").attr('data-progress');
            $(this).parents("[class $= slider]").find("[class $= complete]").width(progress/items*100 + '%');
        });
});