import Chart from 'chart.js/auto';

// Vertical bar chart
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    maintainAspectRatio: false,
    responsive: true,
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
        }],
        
    },
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
          grid: {
            display: false,
            drawTicks: false,
          },
          ticks: {
            padding: -17
          }
        },
        
      },
      layout: {
        padding: {
          bottom: 14,
          left: 0,
        },
      
    }
    
  },

});

