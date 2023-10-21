// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


//Slick slider initialize
// $('.slider').slick({
//   arrows:false, 
//   dots: false, 
//   infinite:true, 
//   speed:1000,
//   autoplay: false, autoplaySpeed: 3000, slidesToShow:1, slidesToScroll:1
// });
// //On click of slider-nav childern,
// //Slick slider navigate to the respective index.
// $('.slider-nav > div').click(function() {
//     $('.slider').slick('slickGoTo',$(this).index());
// })

window.onload = function() {

  $(function() {
    // slide-1
    $('.slider-for-first').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      speed: 1000,
      swipe: false,
      asNavFor: '.slider-nav-first',

    });
    $('.slider-nav-first').slick({
      slidesToShow: 3,
      slidesToScroll: 2,
      asNavFor: '.slider-for-first',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      arrows:false, 
      speed: 1000,
      infinite: true,
      swipe: false,
      responsive: [
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    

    // slide-2
    $('.slider-for-second').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      speed: 1000,
      swipe: false,
      asNavFor: '.slider-nav-second',

    });
    $('.slider-nav-second').slick({
      slidesToShow: 3,
      slidesToScroll: 2,
      asNavFor: '.slider-for-second',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      arrows:false, 
      speed: 1000,
      infinite: true,
      swipe: false,
      responsive: [
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });




    // slide-3
    $('.slider-for-last').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      speed: 1000,
      swipe: false,
      asNavFor: '.slider-nav-last',

    });
    $('.slider-nav-last').slick({
      slidesToShow: 3,
      slidesToScroll: 2,
      asNavFor: '.slider-for-last',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      arrows:false, 
      speed: 1000,
      infinite: true,
      swipe: false,
      responsive: [
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  });

  //Слайдер страницы estate

  $('.exterior__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.exterior__nav'
    });
    $('.exterior__nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.exterior__slider',
    dots: true,
    centerMode: true,
    focusOnSelect: true
    });


  //Работаем с rangeSlider

  $(".filter-price__input").ionRangeSlider({
    type: "double",
    step: 1000,
    prettify_enabled: true,
    onStart: function (data) {
      $('.filter-price__from').text(data.from_pretty);
      $('.filter-price__to').text(data.to_pretty);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from_pretty);
      $('.filter-price__to').text(data.to_pretty);
  },
  });

  //Кнопка projects__filter-btn
  // $('.projects__filter-btn').on('click', function() {
  //   $('.projects__filters').slideToggle();
  // });



}