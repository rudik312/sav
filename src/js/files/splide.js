import Splide from '@splidejs/splide';

import '@splidejs/splide/css';

// import '@splidejs/splide/css/core';
document.addEventListener( 'DOMContentLoaded', function() {

  // var splide = new Splide("#main-slider", {
  //   // width: 1180,
  //   // height: 600,
  //   type       : 'fade',
  //   pagination: false,
  //   cover: true,
  //   speed: 2000,
    

  // });

  // var thumbnails = document.getElementsByClassName("thumbnail");
  // var current;

  // for (var i = 0; i < thumbnails.length; i++) {
  //   initThumbnail(thumbnails[i], i);
  // }

  // function initThumbnail(thumbnail, index) {
  //   thumbnail.addEventListener("click", function () {
  //     splide.go(index);
  //   });
  // }

  // splide.on("mounted move", function () {
  //   var thumbnail = thumbnails[splide.index];

  //   if (thumbnail) {
  //     if (current) {
  //       current.classList.remove("is-active");
  //     }

  //     thumbnail.classList.add("is-active");
  //     current = thumbnail;
  //   }
  // });

  // splide.mount();

// Create and mount the thumbnails slider.

// Create the main slider.
var primarySlider = new Splide( '#primary-slider', {
	type       : 'fade',
	// heightRatio: 0.5,
	pagination : false,
	arrows     : true,
	cover      : true,
  speed      : 1500,
  rewind      : true,
} );

var secondarySlider = new Splide( '#secondary-slider', {
	rewind      : true,
	// fixedWidth  : 265,
	// fixedHeight : 180,
  perMove     : 2,
  perPage     : 4,
	isNavigation: true,
	gap         : 40,
  type        : 'loop',
  speed       : 1000,
  arrows      : false,
	// focus       : 'center',
	pagination  : false,
	cover       : true,
  // flickPower: 600,
	breakpoints : {
    '1000': {
      perPage    : 3,
      perMove   : 2,
      gap       : 30,
    },
		// '600': {
		// 	fixedWidth  : 66,
		// 	fixedHeight : 40,
		// }
	}
} ).mount();


// Set the thumbnails slider as a sync target and then call mount.
primarySlider.sync( secondarySlider ).mount();







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


