import Chart from 'chart.js/auto';

// Vertical bar chart
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        datasets: [{
            label: 'Life expectancy',
            data: [2.24, 2.21, 1.81, 1.80, 1.71, 1.70, 1.62, 1.59, 1.56, 1.39, 1.31, 1.22, 1.21, 1.19, 1.14, 1.08, 0.78, 0.75, 0.59, 0.57, 0.50, 0.34, 0.20, 0.16, 0.15],
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
        }]
    },
    options: {
      indexAxis: 'y',
      plugins: {
        legend: {
            display: false // This hides all text in the legend and also the labels.
        }
    }
    }

});
