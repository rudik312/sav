/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Controller} from 'swiper/modules';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
import 'swiper/css';
// import { controllers } from 'chart.js';
// import 'swiper/css/navigation';



// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.district__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
	new Swiper('.district__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			// observer: true,
			// observeParents: true,
			slidesPerView: 2,
			spaceBetween: 40,
			// autoHeight: true,
			speed: 800,
			mousewheel: {
				forceToAxis: true,
				sensitivity: 1,
				releaseOnEdges: true,
			},

			grabCursor: true, // менять иконку курсора




			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			
			// scrollbar: {
			// 	el: '.swiper-scrollbar',
			// 	draggable: true,
			// },
			

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}


//========================================================================================================================================================



	//.cases
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.cases__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
	new Swiper('.cases__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Controller],
			updateOnWindowResize: true,
			observer: true,
			observeParents: true,
			centeredSlides: true,
			slidesPerView: 1.4,
			spaceBetween: 40,
			// autoHeight: true,
			speed: 1000,
			initialSlide: 1, // присуждаем активность слайда
			centeredSlides: true,
			grabCursor: true,
			// mousewheel: {
			// 	forceToAxis: true,
			// 	sensitivity: 1,
			// 	releaseOnEdges: true,
			// },
			// normalizeSlideIndex: true,
			// slidesOffsetBefore: 1.4,
			// grabCursor: true, // менять иконку курсора

			// controller: {
			// 	control: galleryThumbs,
			// 	// by: 'container',
			// },


			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			
			// scrollbar: {
			// 	el: '.swiper-scrollbar',
			// 	draggable: true,
			// },
			

			// Кнопки "влево/вправо"
			navigation: {
				// prevEl: '.cases__navigation-prev',
				// nextEl: '.cases__navigation-next',

				prevEl: '.cases-swiper-button__prev',
				nextEl: '.cases-swiper-button__next',
			},

			

			// Брейкпоинты
			
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
					slidesPerView: 'auto',
					// autoHeight: true,
				},
				768: {
					slidesPerView: 1.2,
					spaceBetween: 10,
					slidesPerView: 'auto',
				},
				950: {
					slidesPerView: 1.06,
					spaceBetween: 40,
					// slidesPerView: 'auto',
				},
				999: {
					slidesPerView: 1.1,
					spaceBetween: 40,
				},
				1060: {
					slidesPerView: 1.13,
					spaceBetween: 40,
				},
				1100: {
					slidesPerView: 1.19,
					spaceBetween: 40,
				},
				1160: {
					slidesPerView: 1.2,
					spaceBetween: 40,
				},
				1268: {
					slidesPerView: 1.2,
					spaceBetween: 40,
				},
				1360: {
					slidesPerView: 1.2,
					spaceBetween: 40,
				}
			},
			
			// События
			on: {

			}
		});
	}


	// //.cases-slide-inner__slider gallery-top
	// // Проверяем, есть ли слайдер на стронице
	// if (document.querySelector('.gallery-top')) { // Указываем скласс нужного слайдера
	// 	// Создаем слайдер
	// 	var galleryTop = new Swiper('.gallery-top', { // Указываем скласс нужного слайдера
	// 		// Подключаем модули слайдера
	// 		// для конкретного случая
	// 		modules: [Navigation, Controller],
	// 		// updateOnWindowResize: true,
	// 		// observer: true,
	// 		// observeParents: true,

	// 		slidesPerView: 1,
	// 		spaceBetween: 10,
	// 		// autoHeight: true,
	// 		speed: 800,
	// 		loopedSlides: 3,
	// 		// mousewheel: {
	// 		// 	forceToAxis: true,
	// 		// 	sensitivity: 1,
	// 		// 	releaseOnEdges: true,
	// 		// },
	// 		// Кнопки "влево/вправо"
	// 		// navigation: {
	// 		// 	prevEl: '.swiper-button-prev',
	// 		// 	nextEl: '.swiper-button-next',
	// 		// },
	// 		controller: {
	// 			control: galleryThumbs,
	// 			// by: 'container',
				
	// 		},
			
			
	// 		// grabCursor: true, // менять иконку курсора

	// 		//touchRatio: 0,
	// 		//simulateTouch: false,
	// 		// loop: true,
	// 		//preloadImages: false,
	// 		// lazy: true,

			
	// 		// Эффекты
	// 		// effect: 'fade',
	// 		// autoplay: {
	// 		// 	delay: 3000,
	// 			// disableOnInteraction: false,
	// 		// },
			

	// 		// Пагинация
	// 		/*
	// 		pagination: {
	// 			el: '.swiper-pagination',
	// 			clickable: true,
	// 		},
	// 		*/

	// 		// Скроллбар
			
	// 		// scrollbar: {
	// 		// 	el: '.swiper-scrollbar',
	// 		// 	draggable: true,
	// 		// },

	// 		// Брейкпоинты
	// 		/*
	// 		breakpoints: {
	// 			320: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0,
	// 				autoHeight: true,
	// 			},
	// 			768: {
	// 				slidesPerView: 2,
	// 				spaceBetween: 20,
	// 			},
	// 			992: {
	// 				slidesPerView: 3,
	// 				spaceBetween: 20,
	// 			},
	// 			1268: {
	// 				slidesPerView: 4,
	// 				spaceBetween: 30,
	// 			},
	// 		},
	// 		*/
	// 		// События
	// 		// on: {

	// 		// }
	// 	});
	// }

	// if (document.querySelector('.gallery-thumbs')) {
	// 	var galleryThumbs = new Swiper('.gallery-thumbs', {
	// 		modules: [Navigation, Controller],
	// 		// spaceBetween: 10,
	// 		centeredSlides: true,
	// 		slidesPerView: 3,
	// 		// touchRatio: 0.2,
			
	// 		slideToClickedSlide: true,
	// 		// loop: true,
	// 		loopedSlides: 3,
	
	// 		freeMode: true,
	// 		watchSlidesProgress: true,
	
	// 		initialSlide: 1, // присуждаем активность слайда
	// 		// normalizeSlideIndex: true,
	// 		// slidesOffsetBefore: 1,
	// 	});
	// }

	// console.log(galleryTop);
	// console.log(galleryThumbs);

	// if (document.querySelector(".swiper-container.gallery-top")[0]){
	// 	//initialization parameters
	// 	}
	// galleryTop.controller.control = galleryThumbs;
	// galleryThumbs.controller.control = galleryTop;

	// galleryTop.params.control = galleryThumbs;
	// galleryThumbs.params.control = galleryTop;

	// galleryTop[0].params.control = galleryThumbs;
	// galleryThumbs[1].params.control = galleryTop;
}


// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();

	
});

