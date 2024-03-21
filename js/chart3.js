function generateChart3(dataColumns, uniqueId3) {
var chart = c3.generate({ 
    bindto: uniqueId3,
    size: { width: 300, height: 200 },
    data: {
        columns: dataColumns,
        type: 'bar', 
        colors: {
            a: '#008000',
            b: '#0000FF',
            c: '#FFFF00',
        },
        names: {
            a: 'Below 50%',
            b: '50 - 80%',
            c: 'Above 80%',
        }
    },
    axis: {
        x: {
            type: 'category',
            tick: { rotate: 0 },
            categories: ['Below 50%', '50 - 80%', 'Above 80%']
        },
        y: { show: false }
    },
    bar: { centered: true },
    transition: { duration: 500 },
    padding: { bottom: 40, right: 20 },
    legend: { show: false }
});
}