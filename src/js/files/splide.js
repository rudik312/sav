import Splide from '@splidejs/splide';

import '@splidejs/splide/css';

// import '@splidejs/splide/css/core';
document.addEventListener( 'DOMContentLoaded', function() {

var splidePrimary = document.getElementById("primary-slider");
var splideTertiary = document.getElementById("tertiary-slider");
var splideCases = document.getElementById("cases-slider");
var splideCasesNav = document.getElementById("cases-nav");

let splideSlider = document.getElementsByClassName('cases-slide-inner__slider');
let splideNav = document.getElementsByClassName('cases-thumbs__wrapper');



// var elms = document.getElementsByClassName( 'splide' );


// for ( var i = 0; i < elms.length; i++ ) {
//   new Splide( elms[ i ] ).mount();

// }

if (splidePrimary) {
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
      speed       : 1500,
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
  }

if (splideTertiary) {
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
      speed       : 1500,
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
  }


  
//* BLOCK CASES SLIDER  *//

//slide-1 uniqum id
if (splideCases) {
      // Create the interior slider.
      var CasesSlider = new Splide( '#cases-slider', {
        type       : 'fade',
        // heightRatio: 0.5,
        pagination : false,
        arrows     : false,
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
    
      var CasesNav = new Splide( '#cases-nav', {
        rewind      : true, //перемотка
        // fixedWidth  : 265,
        // fixedHeight : 180,
        perMove     : 2,
        perPage     : 4,
        isNavigation: true,
        gap         : 20,
        type        : 'loop',
        speed       : 1500,
        arrows      : false,
        // focus       : 'center',
        pagination  : false,
        cover       : true,
        // flickPower: 600,
        breakpoints : {
          '1380': {
            gap       : 20,
          },
          '950': {
            perPage    : 3,
            perMove    : 2,
            gap       : 10,
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
      CasesSlider.sync( CasesNav ).mount();
}

//slide-2 uniqum id
if (splideCases) {
      // Create the interior slider.
      var CasesSlider = new Splide( '#cases-2', {
        type       : 'fade',
        // heightRatio: 0.5,
        pagination : false,
        arrows     : false,
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
    
      var CasesNav = new Splide( '#cases-nav-2', {
        rewind      : true, //перемотка
        // fixedWidth  : 265,
        // fixedHeight : 180,
        perMove     : 2,
        perPage     : 4,
        isNavigation: true,
        gap         : 20,
        type        : 'loop',
        speed       : 1500,
        arrows      : false,
        // focus       : 'center',
        pagination  : false,
        cover       : true,
        // flickPower: 600,
        breakpoints : {
          '1380': {
            gap       : 20,
          },
          '950': {
            perPage    : 3,
            perMove    : 2,
            gap       : 10,
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
      CasesSlider.sync( CasesNav ).mount();
}

//slide-3 uniqum id
if (splideCases) {
  // Create the interior slider.
  var CasesSlider = new Splide( '#cases-3', {
    type       : 'fade',
    // heightRatio: 0.5,
    pagination : false,
    arrows     : false,
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

  var CasesNav = new Splide( '#cases-nav-3', {
    rewind      : true, //перемотка
    // fixedWidth  : 265,
    // fixedHeight : 180,
    perMove     : 2,
    perPage     : 4,
    isNavigation: true,
    gap         : 20,
    type        : 'loop',
    speed       : 1500,
    arrows      : false,
    // focus       : 'center',
    pagination  : false,
    cover       : true,
    // flickPower: 600,
    breakpoints : {
      '1380': {
        gap       : 20,
      },
      '950': {
        perPage    : 3,
        perMove    : 2,
        gap       : 10,
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
  CasesSlider.sync( CasesNav ).mount();
}

//slide-4 uniqum id
if (splideCases) {
  // Create the interior slider.
  var CasesSlider = new Splide( '#cases-4', {
    type       : 'fade',
    // heightRatio: 0.5,
    pagination : false,
    arrows     : false,
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

  var CasesNav = new Splide( '#cases-nav-4', {
    rewind      : true, //перемотка
    // fixedWidth  : 265,
    // fixedHeight : 180,
    perMove     : 2,
    perPage     : 4,
    isNavigation: true,
    gap         : 20,
    type        : 'loop',
    speed       : 1500,
    arrows      : false,
    // focus       : 'center',
    pagination  : false,
    cover       : true,
    // flickPower: 600,
    breakpoints : {
      '1380': {
        gap       : 20,
      },
      '950': {
        perPage    : 3,
        perMove    : 2,
        gap       : 10,
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
  CasesSlider.sync( CasesNav ).mount();
}

//slide-5 uniqum id
if (splideCases) {
  // Create the interior slider.
  var CasesSlider = new Splide( '#cases-5', {
    type       : 'fade',
    // heightRatio: 0.5,
    pagination : false,
    arrows     : false,
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

  var CasesNav = new Splide( '#cases-nav-5', {
    rewind      : true, //перемотка
    // fixedWidth  : 265,
    // fixedHeight : 180,
    perMove     : 2,
    perPage     : 4,
    isNavigation: true,
    gap         : 20,
    type        : 'loop',
    speed       : 1500,
    arrows      : false,
    // focus       : 'center',
    pagination  : false,
    cover       : true,
    // flickPower: 600,
    breakpoints : {
      '1380': {
        gap       : 20,
      },
      '950': {
        perPage    : 3,
        perMove    : 2,
        gap       : 10,
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
  CasesSlider.sync( CasesNav ).mount();
}

});



