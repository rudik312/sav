import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import ChartDeferred from 'chartjs-plugin-deferred';




// window.onload = function() {



if (document.getElementById("myChart") !== null) {
        // Vertical bar chart

        //Заготовка для указания размеров (https://stackoverflow.com/questions/41953158/set-height-of-chart-in-chart-js)
        // var canvas = document.getElementById(id);
        // canvas.width = window.innerWidth;
        // canvas.height = window.innerHeight / 2.5;  
        // var ctx = canvas.getContext('2d');


        let ctx = document.getElementById('myChart').getContext('2d');
        ctx.canvas.width = 300;
        ctx.canvas.height = 424;
        let myChart = new Chart(ctx, {
            maintainAspectRatio: false,
            responsive: false,
            type: 'bar',
            data: {
                labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                
                datasets: [{
                    // label: 'status',
                    data: [
                      2.24, 2.21, 1.81, 1.80, 1.71, 1.70, 1.62, 1.59, 1.56, 1.39, 1.31, 1.22, 1.21, 1.19, 1.14, 1.08, 0.78, 0.75, 0.59, 0.57, 0.50, 0.34, 0.20, 0.16, 0.15
                    ],
                    backgroundColor: [
                        '#EF3636',
                        '#EF3636',
                        '#EF3636',
                        '#EF3636',
                        '#EF3636',
                        '#EF3636',
                        '#EF3636',
                        '#EF3636',
                        '#EF3636',
                        '#FFC95E',
                        '#FFC95E',
                        '#FFC95E',
                        '#FFC95E',
                        '#FFC95E',
                        '#FFC95E',
                        '#FFC95E',
                        '#FFC95E',
                        '#FFC95E',
                        '#FFC95E',
                        '#FFC95E',
                        '#FFC95E',
                        '#07C926',
                        '#07C926',
                        '#07C926',
                        '#07C926',
                    ],
                    
                    // barPercentage: 1.0,
                    //Установка ширины полоски в пикселях
                    barThickness: 13,
                    // categoryPercentage: 0.5,
                    datalabels: {
                      color: '#13465B',
                      anchor: 'end',
                      align: 'end',
                      offset: 4,
                      font: {
                        size: 12,
                        family: 'Mulish',
                        style: 'normal',
                        lineHeight: 1.2,
                        weight: 500
                      }
                    },
                    // показываем анимацию только при видимости блока
                    deferred: {
                      xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
                      yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
                      delay: 200      // delay of 500 ms after the canvas is considered inside the viewport
                    }
                }],
              legend: {
                labels: {
                  boxWidth: 20,
                }
              }
            },
            plugins: [ChartDataLabels, ChartDeferred],
            maintainAspectRatio: false,
            options: {
              responsive: false,
              indexAxis: 'y',
              plugins: {
                legend: {
                    display: false, // This hides all text in the legend and also the labels.
                },
                
                //убираем подсказки
                tooltip: false,
              },
              // скрываем сетку на фоне
              scales: {
                x: {
                  //отключаем ось X
                  display: false,
                  grid: {
                  display: false,
                  
                },
                //Удалить надписи по оси x 
                ticks: {
                  display: false,
                }
                },
                y: {
                  beginAtZero: true,
                  // stepSize: 5,
                  // grace: 50,
                  grid: {
                    display: false,
                    drawTicks: false,
                    
                  },
                  ticks: {
                    padding: -17,
                  },
                  // min: 0.01,
                  // max: 30,
                  
                },
                
              },
              layout: {
                padding: {
                  // bottom: 14,
                  bottom: 2,
                  left: 0,
                },
            },
            animation: {
              duration: 1500,
              delay: 500,
              
            }
          }
      
        });
}



  
// }