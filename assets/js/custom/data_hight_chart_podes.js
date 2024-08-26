// HIghtchart
Highcharts.chart('pie_chart_podes01', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Data Wilayah Desa Tanjung Raja Selatan'
    },
    tooltip: {
        valueSuffix: '%'
    },
    subtitle: {
        text:
        'Data Tahun 2024'
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: false,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '0.8em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: 'Jenis Wilayah',
            colorByPoint: true,
            data: [
                {
                    name: 'Tanah Kering: 225 Ha',
                    y: 55.6,
                },
                {
                    name: 'Tanah Sawah : 114 Ha',
                    sliced: true,
                    selected: true,
                    y: 28.1
                },
                {
                    name: 'Tanah Basah : 0 Ha',
                    y: 0
                },
                {
                    name: 'Tanah Perkebunan: 39 Ha',
                    y: 9.6
                },
                {
                    name: 'Tanah Fasum : 27 Ha',
                    y: 6.7
                },
                {
                    name: 'Tanah Hutan : 0 Ha',
                    y: 0
                }
            ]
        }
    ]
});



// Create the chart
Highcharts.chart('bar_chart_podes01', {
    chart: {
        type: 'column'
    },
    title: {
        align: 'left',
        text: 'Kondisi Penduduk Desa Tanjung Raja Selatan'
    },
    subtitle: {
        align: 'left',
        text: 'Sumber Data Source: <a href="http://bps.go.id" target="_blank">Badan Pusat Statistik</a>'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Jumlah Penduduk  (Jiwa)'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{y}'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: ' +
            '<b>{point.y:f}</b> jiwa<br/>'
    },

    series: [
        {
            name: 'Penduduk',
            colorByPoint: true,
            data: [
                {
                    name: 'Penduduk Laki-laki',
                    y: 1903,
                    drilldown: 'lk'
                },
                {
                    name: 'Penduduk Perempuan',
                    y: 1899,
                    drilldown: 'pr'
                },
                {
                    name: 'Total Jumlah Penduduk',
                    y: 3802,
                    drilldown: 'total'
                },
            ]
        }
    ],
    drilldown: {
        breadcrumbs: {
            position: {
                align: 'right'
            }
        },
        series: [
            {
                name: 'lk',
                id: 'lk',
                data: [
                    [
                        'v65.0',
                        0.1
                    ],
                    [
                        'v64.0',
                        1.3
                    ],
                    [
                        'v63.0',
                        53.02
                    ],
                    [
                        'v62.0',
                        1.4
                    ],
                    [
                        'v61.0',
                        0.88
                    ],
                    [
                        'v60.0',
                        0.56
                    ],
                    [
                        'v59.0',
                        0.45
                    ],
                    [
                        'v58.0',
                        0.49
                    ],
                    [
                        'v57.0',
                        0.32
                    ],
                    [
                        'v56.0',
                        0.29
                    ],
                    [
                        'v55.0',
                        0.79
                    ],
                    [
                        'v54.0',
                        0.18
                    ],
                    [
                        'v51.0',
                        0.13
                    ],
                    [
                        'v49.0',
                        2.16
                    ],
                    [
                        'v48.0',
                        0.13
                    ],
                    [
                        'v47.0',
                        0.11
                    ],
                    [
                        'v43.0',
                        0.17
                    ],
                    [
                        'v29.0',
                        0.26
                    ]
                ]
            },
            {
                name: 'pr',
                id: 'pr',
                data: [
                    [
                        'v58.0',
                        1.02
                    ],
                    [
                        'v57.0',
                        7.36
                    ],
                    [
                        'v56.0',
                        0.35
                    ],
                    [
                        'v55.0',
                        0.11
                    ],
                    [
                        'v54.0',
                        0.1
                    ],
                    [
                        'v52.0',
                        0.95
                    ],
                    [
                        'v51.0',
                        0.15
                    ],
                    [
                        'v50.0',
                        0.1
                    ],
                    [
                        'v48.0',
                        0.31
                    ],
                    [
                        'v47.0',
                        0.12
                    ]
                ]
            },

            {
                name: 'total',
                id: 'total',
                data: [
                    [
                        'v16',
                        2.6
                    ],
                    [
                        'v15',
                        0.92
                    ],
                    [
                        'v14',
                        0.4
                    ],
                    [
                        'v13',
                        0.1
                    ]
                ]
            },
        ]
    }
});
