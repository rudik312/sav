// import Splide from '@splidejs/splide';

// import '@splidejs/splide/css';

// import '@splidejs/splide/css/core';
document.addEventListener( 'DOMContentLoaded', function() {

// var splides = document.querySelectorAll('.splide');
// var thumbs = document.querySelectorAll('.thumbnail-carousel');


// var splideInit = function() {
//   for (let i = 0; i < splides.length; i++) {
//     const splideItem = splides[i];
//     var optionsSplide = {
//     type       : 'fade',
//     pagination: false,
//     arrows    : false,
//     speed: 1000,
//     gap       : 15,
//     }
//     var splide = new Splide (splideItem, optionsSplide);
    
//     splide.mount();
//   }

// }

// var thumbInit = function() {
//   for (let i = 0; i < thumbs.length; i++) {
//     const thumbItem = thumbs[i];
//     var optionsThumb = {
//     isNavigation    : true,
//     arrows          : false,
//     gap             : 15,
//     focus           : 'center',
//     pagination      : false,
//     cover           : true,
//     width: '98%',
//     speed: 1000,
//     }
//     var thumb = new Splide (thumbItem, optionsThumb);

//     thumb.mount();
//   }
// }

// splideInit();
// thumbInit();


//========================================================================================================================================================

// let splide = new Splide( '.splide', {
//   type       : 'fade',
//   pagination: false,
//   arrows    : false,
//   speed: 1000,
// } );


// let thumbnails = new Splide( '.thumbnail-carousel', {
//   isNavigation    : true,
//   arrows    : false,
//   gap             : 15,
//   focus           : 'center',
//   pagination      : false,
//   cover           : true,
//   width: '98%',
//   speed: 1000,
//   // type: 'loop',
// } );


// splide.sync( thumbnails );
// splide.mount();
// thumbnails.mount();

//========================================================================================================================================================

//========================================================================================================================================================

// var splides = document.querySelectorAll('.splide');
// var thumbs = document.querySelectorAll('.thumbnail-carousel');

// function splideInit() {
//   for (let i = 0; i < splides.length; i++) {
  
//     const splideItem = splides[i];
//     var optionsSplide = {
//     type       : 'fade',
//     pagination: false,
//     arrows    : false,
//     speed: 1000,
//     gap       : 15,
//     }
  
//     var splide = new Splide (splideItem, optionsSplide);
//     // splide.sync(thumb);
//     splide.mount();
//     // thumbInit();
    
//   }
// }


// function thumbInit() {
//   for (let k = 0; k < thumbs.length; k++) {
//     const thumbItem = thumbs[k];
//     var optionsThumb = {
//     isNavigation    : true,
//     arrows          : false,
//     gap             : 15,
//     focus           : 'center',
//     pagination      : false,
//     cover           : true,
//     width: '98%',
//     speed: 1000,
//     }
    
//     var thumb = new Splide (thumbItem, optionsThumb);
//     thumb.mount();
  
//   }
// }
// splideInit()
// thumbInit()
});


//========================================================================================================================================================

// var splides = document.querySelectorAll('.splide');
// // 1. query slider elements: are there any splide elements?
// if(splides.length){
//     // 2. process all instances
//     for(var i=0; i<splides.length; i++){
//         var splideElement = splides[i];
//         //3.1 if no options are defined by 'data-splide' attribute: take these default options
//         var splideDefaultOptions = 
//         {
//             type   : 'slide',
//             rewind: true,
//             perPage: 1,
//             autoplay:false,
//             arrows:true,
//             pagination:true,
//             drag:true,
//             keyboard:true,
//             heightRatio: 0.5,
//             cover: true,
//         }
//         /**
//         * 3.2 if options are defined by 'data-splide' attribute: default options will we overridden
//         * see documentation: https://splidejs.com/guides/options/#by-data-attribute
//         **/
        
//         var splide = new Splide( splideElement, splideDefaultOptions ); 
//         // 3. mount/initialize this slider
//         splide.mount();
//     }
// }
//========================================================================================================================================================
