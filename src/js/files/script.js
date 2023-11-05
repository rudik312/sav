// Подключение функционала "Чертогов Фрилансера"
import { isMobile, showMore } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


window.onload = function() {

  // $(function() {
  //   // slide-1
  //   // $('.slider-for-first').slick({
  //   //   slidesToShow: 1,
  //   //   slidesToScroll: 1,
  //   //   arrows: false,
  //   //   fade: true,
  //   //   speed: 1000,
  //   //   swipe: false,
  //   //   asNavFor: '.slider-nav-first',

  //   // });
  //   // $('.slider-nav-first').slick({
  //   //   slidesToShow: 3,
  //   //   slidesToScroll: 2,
  //   //   asNavFor: '.slider-for-first',
  //   //   dots: false,
  //   //   centerMode: false,
  //   //   focusOnSelect: true,
  //   //   arrows:false, 
  //   //   speed: 1000,
  //   //   infinite: true,
  //   //   swipe: false,
  //   //   responsive: [
  //   //     {
  //   //       breakpoint: 950,
  //   //       settings: {
  //   //         slidesToShow: 2,
  //   //         slidesToScroll: 2,
  //   //       }
  //   //     },
  //   //     {
  //   //       breakpoint: 600,
  //   //       settings: {
  //   //         slidesToShow: 2,
  //   //         slidesToScroll: 2
  //   //       }
  //   //     },
  //   //     {
  //   //       breakpoint: 480,
  //   //       settings: {
  //   //         slidesToShow: 2,
  //   //         slidesToScroll: 2,
  //   //       }
  //   //     },
  //   //     {
  //   //       breakpoint: 320,
  //   //       settings: {
  //   //         slidesToShow: 2,
  //   //         slidesToScroll: 2,
  //   //       }
  //   //     },
  //   //     // You can unslick at a given breakpoint now by adding:
  //   //     // settings: "unslick"
  //   //     // instead of a settings object
  //   //   ]
  //   // });
    

  //   // slide-2
  //   $('.slider-for-second').slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows: false,
  //     fade: true,
  //     speed: 1000,
  //     swipe: false,
  //     asNavFor: '.slider-nav-second',

  //   });
  //   $('.slider-nav-second').slick({
  //     slidesToShow: 3,
  //     slidesToScroll: 2,
  //     asNavFor: '.slider-for-second',
  //     dots: false,
  //     centerMode: false,
  //     focusOnSelect: true,
  //     arrows:false, 
  //     speed: 1000,
  //     infinite: true,
  //     swipe: false,
  //     responsive: [
  //       {
  //         breakpoint: 950,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2,
  //         }
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2
  //         }
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2,
  //         }
  //       },
  //       {
  //         breakpoint: 320,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2,
  //         }
  //       },
  //       // You can unslick at a given breakpoint now by adding:
  //       // settings: "unslick"
  //       // instead of a settings object
  //     ]
  //   });

  //   // slide-3
  //   $('.slider-for-last').slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows: false,
  //     fade: true,
  //     speed: 1000,
  //     swipe: false,
  //     asNavFor: '.slider-nav-last',

  //   });
  //   $('.slider-nav-last').slick({
  //     slidesToShow: 3,
  //     slidesToScroll: 2,
  //     asNavFor: '.slider-for-last',
  //     dots: false,
  //     centerMode: false,
  //     focusOnSelect: true,
  //     arrows:false, 
  //     speed: 1000,
  //     infinite: true,
  //     swipe: false,
  //     responsive: [
  //       {
  //         breakpoint: 950,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2,
  //         }
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2
  //         }
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2,
  //         }
  //       },
  //       {
  //         breakpoint: 320,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2,
  //         }
  //       },
  //     ]
  //   });
  // });

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


  // Кнопка показать еще (page projects)

  function showLocation() {

  let boxLoc = document.getElementsByClassName('filter-location__label');
  let btnLoc = document.getElementById('show-location');
    
  for (let i = 7; i < boxLoc.length; i++) {
    boxLoc[i].style.display = "none";
  }

  let itemsLoc;
  btnLoc.addEventListener("click", function() {
    itemsLoc = boxLoc.length;
      if (itemsLoc <= boxLoc.length){
        for (let i = 0; i < itemsLoc; i++) {
          boxLoc[i].style.display = "flex";
        }
      }
      if (itemsLoc >= boxLoc.length) {
        btnLoc.style.display = 'none'
      }

    });
  }

  function showDevelopers() {

    let boxDev = document.getElementsByClassName('filter-developer__label');
    let btnDev = document.getElementById('show-developer');
      
    for (let i = 7; i < boxDev.length; i++) {
      boxDev[i].style.display = "none";
    }
  
    let itemsDev;
    btnDev.addEventListener("click", function() {
      itemsDev = boxDev.length;
        if (itemsDev <= boxDev.length){
          for (let i = 0; i < itemsDev; i++) {
            boxDev[i].style.display = "flex";
          }
        }
        if (itemsDev >= boxDev.length) {
          btnDev.style.display = 'none'
        }

      });
    }

  showLocation();
  showDevelopers();
  

}