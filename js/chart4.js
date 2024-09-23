function generateMinpopChart(uniqueId, feature) {
    var minpopData = [
        ['Year', 1980, 1990, 2000, 2010, 2020],
        ['Minority Population']
    ];

    var minpopFields = ['minpop80', 'minpop90', 'minpop00', 'minpop10', 'minpop20'];

    minpopFields.forEach((field, index) => {
        let value = feature.properties[field] || 0;
        minpopData[1].push(value);
    });

    var chart = c3.generate({
        bindto: uniqueId,
        size: { width: 300, height: 100 },  // Height set to 100px
        data: {
            x: 'Year',
            columns: minpopData,
            types: {
                'Minority Population': 'bar',
            },
            colors: {
                'Minority Population': function(d) {
                    let value = d.value;
                    if (value >= 80) return 'rgba(53, 35, 68, 0.9)'; // Dark purple
                    if (value >= 50) return 'rgba(99, 83, 113, 0.6)'; // Light purple
                    return '#BDC1C9'; // Light gray
                },
            },
        },
        bar: {
            width: { ratio: 0.8 }  // Adjust bar width if needed
        },
        axis: {
            x: {
                type: 'category'
            },
            y: {
                show: false  // Disable y-axis and its labels
            }
        },
        legend: {
            show: false  // Disable the legend
        },
        tooltip: {
            contents: function(d, defaultTitleFormat, defaultValueFormat, color) {
                var value = (Math.round(d[0].value * 10) / 10).toFixed(1);  // Round to 1 decimal place
                var yearMapping = [1980, 1990, 2000, 2010, 2020];  // Map values to years
                var year = yearMapping[d[0].index];  // Get the correct year based on the index
                return `<table class="c3-tooltip"><tr><td><strong>${year}</strong></td><td>${value}%</td></tr></table>`;
            }
        },
        padding: {
            top: 5,  // Padding to avoid label cutoff
            bottom: 0
        }
    });
}
