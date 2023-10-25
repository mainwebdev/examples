$(document).ready(function() {
  var isDay = true;
  var colorLegend = '#2F3448';
  var colorDay = '#3D56CC';
  var colorNight = '#FFFFFF';

  //-------------------------------------

  $('.color-theme-link').click(function(e) {
    e.preventDefault();
    isDay = !isDay;
  });

  //-------------------------------------

  var options = {
    responsive: [
      {
        breakpoint: 480,
        options: {
          // chart: {
          //   height: 380,
          // },
          // dataLabels: {
          //   style: {
          //     fontSize: '0.5625rem',
          //   },
          // },
          legend: {
            // offsetY: 10,
            show: false,
          },
        },
      },
    ],
    tooltip: {
      custom: function(opts) {
        // series[seriesIndex][dataPointIndex]
        // var series = opts.series
        var seriesIndex = opts.seriesIndex;
        var dataPointIndex = opts.dataPointIndex;
        if (dataPointIndex === 1 && seriesIndex === 2) {
          return '<div class="tooltip last"><span class="tooltip__text">' + 'P<0.0001' + '</span></div>';
        }
        if (dataPointIndex === 0) {
          return '<div class="tooltip"><span class="tooltip__text">' + 'P<0.01' + '</span></div>';
        } else if (dataPointIndex === 1) {
          return '<div class="tooltip"><span class="tooltip__text">' + 'P<0.0001' + '</span></div>';
        }
      },
      fixed: {
        enabled: false,
        position: 'topRight',
        // offsetX: 0,
        // offsetY: 20,
      },
    },
    chart: {
      type: 'bar',
      // height: 300,
    },
    series: [
      {
        name: 'Плацебо',
        data: [11, 26],
      },
      {
        name: 'Суматриптан 100 мг',
        data: [27, 59],
      },
      {
        name: 'Релпакс ® 40 мг',
        data: [34, 67],
      },
    ],
    colors: ['#8494DE', '#3D56CC', '#E82464'],
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      offsetX: 0,
      offsetY: -10,
      fontFamily: 'Futura PT Book',
      colors: ['#2F3448'],
      itemMargin: {
        vertical: 10,
        horizontal: 5,
      },
    },
    xaxis: {
      categories: ['1 час', '2 часа'],
      axisBorder: {
        show: true,
        offsetX: -2,
        offsetY: 0,
      },
      axisTicks: {
        show: true,
        borderType: 'solid',
        color: '#3D56CC',
        height: 10,
        offsetX: 0,
        offsetY: -5,
        style: {
          cssClass: 'apexcharts-xaxis-ticks',
        },
      },
    },
    yaxis: {
      show: true,
      min: 0,
      max: 80,
      tickAmount: 4,
      title: {
        text: 'Пациенты %',
        offsetX: -10,
        offsetY: 0,
        style: {
          color: undefined,
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          cssClass: 'apexcharts-yaxis-title',
        },
      },
      axisTicks: {
        show: true,
        borderType: 'solid',
        color: '#3D56CC',
        width: 10,
        offsetX: 5,
        offsetY: 0,
        style: {
          cssClass: 'apexcharts-yaxis-ticks',
        },
      },
      axisBorder: {
        show: true,
        offsetX: 0,
        offsetY: 0,
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: 0,
      offsetY: -5,
      style: {
        colors: ['#3D56CC'],
        fontWeight: 'bold',
        fontFamily: 'Futura PT',
        fontSize: '0.8125rem',
        letterSpacing: '-0.01em',
      },
      formatter: function(val, opts) {
        var label;
        // var series = opts.series
        var seriesIndex = opts.seriesIndex;
        var dataPointIndex = opts.dataPointIndex;
        if (dataPointIndex === 0 && seriesIndex === 2) {
          return (label = val + ' %*');
        } else if (dataPointIndex === 1 && seriesIndex === 2) {
          return (label = val + ' %**');
        } else {
          return (label = val + ' %');
        }
      },
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: 'top',
        },
      },
    },
    grid: {
      show: true,
      borderColor: '#D5E2F7',
      strokeDashArray: 0,
      position: 'back',
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      row: {
        colors: ['transparent', 'transparent', 'transparent'],
      },
      column: {
        colors: ['transparent', 'transparent', 'transparent'],
      },
    },
  };

  var options2 = {
    responsive: [
      {
        breakpoint: 480,
        options: {
          // chart: {
          //   height: 350,
          // },
          // dataLabels: {
          //   style: {
          //     fontSize: '0.5625rem',
          //   },
          // },
          legend: {
            show: false,
          }
        },
      },
    ],
    tooltip: {
      custom: function(opts) {
        var seriesIndex = opts.seriesIndex;
        var dataPointIndex = opts.dataPointIndex;
        if (dataPointIndex === 2 && seriesIndex === 1) {
          return '<div class="tooltip last"><span class="tooltip__text">' + 'n=779' + '</span></div>';
        }
        return '<div class="tooltip"><span class="tooltip__text">' + 'n=779' + '</span></div>';
      },
      fixed: {
        enabled: false,
        position: 'topRight',
      },
    },
    chart: {
      type: 'bar',
      // height: 300,
    },
    series: [
      {
        name: 'Суматриптан 100 мг',
        data: [67, 63, 67],
      },
      {
        name: 'Релпакс ® 40 мг',
        data: [74, 71, 74],
      },
    ],
    colors: ['#3D56CC', '#E82464'],
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      offsetX: 0,
      offsetY: -5,
      fontFamily: 'Futura PT Book',
      colors: ['#2F3448'],
      itemMargin: {
        horizontal: 5,
        vertical: 10,
      },
    },
    xaxis: {
      categories: ['Тошнота', 'Светобоязнь', 'Фонофобия'],
      axisBorder: {
        show: true,
        offsetX: -2,
        offsetY: 0,
      },
      axisTicks: {
        show: true,
        borderType: 'solid',
        color: '#3D56CC',
        height: 10,
        offsetX: 0,
        offsetY: -5,
        style: {
          cssClass: 'apexcharts-xaxis-ticks',
        },
      },
    },
    yaxis: {
      show: true,
      min: 0,
      max: 100,
      tickAmount: 5,
      // labels: {
      //   formatter: (value) => { return console.log(value) },
      // },
      title: {
        text: 'Пациенты % n-кол-во пац-ов',
        offsetX: -10,
        offsetY: 0,
        style: {
          cssClass: 'apexcharts-yaxis-title',
        },
      },
      axisTicks: {
        show: true,
        borderType: 'solid',
        color: '#3D56CC',
        width: 10,
        offsetX: 5,
        offsetY: 0,
        style: {
          cssClass: 'apexcharts-yaxis-ticks',
        },
      },
      axisBorder: {
        show: true,
        offsetX: 0,
        offsetY: 0,
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: 0,
      // offsetY: -20,
      offsetY: -5,
      style: {
        colors: ['#3D56CC'],
        fontWeight: 'bold',
        fontFamily: 'Futura PT',
        fontSize: '0.8125rem',
        letterSpacing: '-0.01em',
      },
      formatter: function(val, opts) {
        var label = val + ' %';
        return label;
      },
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: 'top',
        },
      },
    },
    grid: {
      show: true,
      borderColor: '#D5E2F7',
      strokeDashArray: 0,
      position: 'back',
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      row: {
        colors: ['transparent', 'transparent', 'transparent'],
      },
      column: {
        colors: ['transparent', 'transparent', 'transparent'],
      },
    },
  };

  var chart = new ApexCharts(document.querySelector('#chart_div'), options);
  var chart2 = new ApexCharts(document.querySelector('#chart_div-2'), options2);

  chart.render();
  chart2.render();

  // check if the checkbox has any unchecked item
  checkLegends();

  function checkLegends() {
    var chartWrap = Array.prototype.slice.call(document.querySelectorAll('.chart_div-wrap'));
    chartWrap.forEach(function(el, ind) {
      var allLegends = el.querySelectorAll(".chart_div_legend input[type='checkbox']");
      switch (ind) {
        case 0:
          setCheckboxListeners(allLegends, chart);
          break;
        case 1:
          setCheckboxListeners(allLegends, chart2);
          break;
        default:
          break;
      }
    });
  }

  function setCheckboxListeners(allLegends, chart) {
    for (var i = 0; i < allLegends.length; i++) {
      if (!allLegends[i].checked) {
        chart.toggleSeries(allLegends[i].value);
      }

      allLegends[i].addEventListener('change', function(e) {
        chart.toggleSeries(e.target.value);
      })
    }
  }

  // toggleSeries accepts a single argument which should match the series name you're trying to toggle
  function toggleSeries(checkbox, chart) {
    chart.toggleSeries(checkbox.value);
  }
});
