$(function () {
    $('#crimes-iit').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Illinois Institute of Technology'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        credits: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Crimes',
            colorByPoint: true,
            data: [{
                name: 'Burglary',
                y: 56.33
            }, {
                name: 'Armed Robery',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Gang violence',
                y: 10.38
            }, {
                name: 'Other',
                y: 4.77
            }, {
                name: 'Assault',
                y: 0.91
            }, {
                name: 'Murder',
                y: 0.2
            }]
        }]
    });

    $('#crimes-nyu').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'New York University'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        credits: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Crimes',
            colorByPoint: true,
            data: [{
                name: 'Burglary',
                y: 20.0
            }, {
                name: 'Armed Robery',
                y: 5.0,
                sliced: true,
                selected: true
            }, {
                name: 'Gang violence',
                y: 10.38
            }, {
                name: 'Other',
                y: 5.0
            }, {
                name: 'Assault',
                y: 65.00
            }, {
                name: 'Murder',
                y: 5.0
            }]
        }]
    });
});
