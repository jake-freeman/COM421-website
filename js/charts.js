$(function () {
    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    });

    $('#crimes-iit').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Illinois Institute of Technology<br />2010-2014'
        },
        tooltip: {
            headerFormat: '{series.name}<br />',
            pointFormat: '{point.name}: <b>{point.percentage:.1f} %</b>'
        },
        credits: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: <b>{point.y:.0f}</b>',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Violent Crimes',
            colorByPoint: true,
            data: [{
                name: 'Burglary',
                y: 1421,
                drilldown: null
            }, {
                name: 'Armed Robery',
                y: 1159,
                drilldown: null,
                sliced: true,
                selected: true
            }, {
                name: 'Vehicle Theft',
                y: 1629,
                drilldown: null
            }, {
                name: 'Other',
                y: 236,
                drilldown: 'Other'
            }, {
                name: 'Assault',
                y: 29,
                drilldown: null
            }, {
                name: 'Homicide',
                y: 33,
                drilldown: null
            }, {
                name: 'Kidnapping',
                y: 21,
                drilldown: null
            }, {
                name: 'Battery',
                y: 5150,
                drilldown: null
            }]
        }],
        drilldown: {
            series: [{
                name: 'Other',
                id: 'Other',
                data: [
                    ['Arson', 29],
                    ['Sexual Assault', 94],
                    ['Sex Offense', 93],
                    ['Stalking', 20]
                ]
            }]
          }
    });

    $('#crimes-nyu').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Columbia University<br />2010-2014'
        },
        tooltip: {
            headerFormat: '{series.name}<br />',
            pointFormat: '{point.name}: <b>{point.percentage:.1f} %</b>'
        },
        credits: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: <b>{point.y:.0f}</b>',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Violent Crimes',
            colorByPoint: true,
            data: [{
                name: 'Theft',
                y: 1759
            }, {
                name: 'Armed Robery',
                y: 833,
                sliced: true,
                selected: true
            }, {
                name: 'Assault',
                y: 746
            }, {
                name: 'Burglary',
                y: 428
            }, {
                name: 'Vehicle Theft',
                y: 134
            }, {
                name: 'Sexual Assault',
                y: 48
            }, {
                name: 'Homicide',
                y: 10
            }]
        }]
    });

    $('#crimes-uoc').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'University of Chicago<br />2010-2014'
        },
        tooltip: {
            headerFormat: '{series.name}<br />',
            pointFormat: '{point.name}: <b>{point.percentage:.1f} %</b>'
        },
        credits: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: <b>{point.y:.0f}</b>',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Violent Crimes',
            colorByPoint: true,
            data: [{
                name: 'Burglary',
                y: 2977,
                drilldown: null
            }, {
                name: 'Armed Robery',
                y: 1802,
                drilldown: null,
                sliced: true,
                selected: true
            }, {
                name: 'Vehicle Theft',
                y: 1597,
                drilldown: null
            }, {
                name: 'Other',
                y: 354,
                drilldown: 'Other'
            }, {
                name: 'Assault',
                y: 2785,
                drilldown: null
            }, {
                name: 'Homicide',
                y: 75,
                drilldown: null
            }, {
                name: 'Kidnapping',
                y: 37,
                drilldown: null
            }, {
                name: 'Battery',
                y: 8452,
                drilldown: null
            }]
        }],
        drilldown: {
            series: [{
                name: 'Other',
                id: 'Other',
                data: [
                    ['Arson', 43],
                    ['Sexual Assault', 190],
                    ['Sex Offense', 109],
                    ['Stalking', 12]
                ]
            }]
          }
    });

    $('#crimes-ucla').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'University of California, Los Angeles<br />2014-2015'
        },
        tooltip: {
            headerFormat: '{series.name}<br />',
            pointFormat: '{point.name}: <b>{point.percentage:.1f} %</b>'
        },
        credits: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: <b>{point.y:.0f}</b>',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Violent Crimes',
            colorByPoint: true,
            data: [{
                name: 'Burglary',
                y: 216,
                drilldown: null
            }, {
                name: 'Vehicle Theft',
                y: 27,
                drilldown: null
            }, {
                name: 'Assault',
                y: 7,
                drilldown: null
            }, {
                name: 'Theft',
                y: 94,
                drilldown: 'Theft'
            }]
        }],
        drilldown: {
            series: [{
                name: 'Theft',
                id: 'Theft',
                data: [
                    ['Petty (< $950)', 50],
                    ['Grand (> $950)', 25],
                    ['Bunco', 11],
                    ['Shoplifting', 1],
                    ['Stolen Bike', 7]
                ]
            }]
          }
    });

    $('#crimes-year').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Total Violent Crimes by Year<br />2010-2014'
        },
        xAxis: {
            categories: ['2010', '2011', '2012', '2013', '2014']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total nummber of crimes'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x:.0f}</b><br/>',
            pointFormat: '{series.name}: {point.y:.0f}<br/>Total: {point.stackTotal}'
        },
        credits: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }
            }
        },
        series: [{
            name: 'IIT',
            data: [6115, 6067, 5882, 5570, 4779]
        }, {
            name: 'U of Chicago',
            data: [10207, 9340, 8262, 7361, 6313]
        }, {
            name: 'Columbia',
            data: [772, 766, 836, 837, 747]
        }]
    });
});
