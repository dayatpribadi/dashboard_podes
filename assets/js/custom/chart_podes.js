var options = {
    series: [{
    name: 'Penduduk Laki-Laki',
    data: [1903]
  }, {
    name: 'Penduduk Perempuan',
    data: [1899]
  }, {
    name: 'Total Jumlah Penduduk',
    data: [3802]
  }],
    chart: {
    type: 'bar',
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '35%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Penduduk Laki-Laki', 'Penduduk Perempuan', 'Total Jumlah Penduduk',],
  },
  yaxis: {
    title: {
      text: 'Jumlah ( Jiwa )'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return " " + val + " Jiwa"
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#charta"), options);
  chart.render();

//   E-chart
var dom = document.getElementById('chart_pie_two');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: true
});
var app = {};

var option;

option = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
      }
    ]
  };

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
