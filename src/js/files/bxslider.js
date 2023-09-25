import "/node_modules/bxslider/dist/jquery.bxslider.css";

import "/node_modules/bxslider/dist/jquery.bxslider.min.js";

$(document).ready(function(){
	$('.slider').bxSlider({
		pagerCustom: '.splide__slide',
		controls: true,  
    mode: 'fade',
		// auto: false,
		minSlides: 1,
		maxSlides: 1,
	});
});