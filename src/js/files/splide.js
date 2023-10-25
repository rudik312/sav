import Splide from '@splidejs/splide';

import '@splidejs/splide/css';

// import '@splidejs/splide/css/core';
document.addEventListener( 'DOMContentLoaded', function() {



// Create the exterior slider.
var primarySlider = new Splide( '#primary-slider', {
	type       : 'fade',
	// heightRatio: 0.5,
	pagination : false,
	arrows     : true,
	cover      : true,
  speed      : 1500,
  rewind      : true, //перемотка
  breakpoints: {
    // '420': {
    //   type   : 'loop',
    //   padding: '10%',
    // },
  }
} );

var secondarySlider = new Splide( '#secondary-slider', {
	rewind      : true, //перемотка
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
    '1380': {
      gap       : 20,
    },
    '1000': {
      perPage    : 3,
      perMove    : 2,
    },
    '768': {
      perPage    : 2,
    },

		// '600': {
		// 	fixedWidth  : 66,
		// 	fixedHeight : 40,
		// }
	}
} ).mount();


// Set the thumbnails slider as a sync target and then call mount.
primarySlider.sync( secondarySlider ).mount();





// Create the interior slider.
var tertiarySlider = new Splide( '#tertiary-slider', {
	type       : 'fade',
	// heightRatio: 0.5,
	pagination : false,
	arrows     : true,
	cover      : true,
  speed      : 1500,
  rewind      : true, //перемотка
  breakpoints: {
    // '420': {
    //   type   : 'loop',
    //   padding: '10%',
    // },
  }
} );

var quaternarySlider = new Splide( '#quaternary-slider', {
	rewind      : true, //перемотка
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
    '1380': {
      gap       : 20,
    },
    '1000': {
      perPage    : 3,
      perMove    : 2,
    },
    '768': {
      perPage    : 2,
    },

		// '600': {
		// 	fixedWidth  : 66,
		// 	fixedHeight : 40,
		// }
	}
} ).mount();


// Set the thumbnails slider as a sync target and then call mount.
tertiarySlider.sync( quaternarySlider ).mount();




});



