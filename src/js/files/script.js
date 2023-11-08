// Подключение функционала "Чертогов Фрилансера"
import { isMobile, showMore } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

//Подключаем квиз-опрос
import "../files/quize.js";

window.onload = function() {



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

  let btnLoc = document.getElementById('show-location');
  if (btnLoc) {
    let boxLoc = document.getElementsByClassName('filter-location__label');
      
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

  let btnDev = document.getElementById('show-developer');
  if (btnDev) {
    let boxDev = document.getElementsByClassName('filter-developer__label');
    
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

}