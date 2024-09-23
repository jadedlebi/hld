function generateChart3(dataColumns, uniqueId3) {
    // Check if dataColumns is null, undefined, or not formatted as expected
    if (!dataColumns || !Array.isArray(dataColumns) || dataColumns.length === 0 || !Array.isArray(dataColumns[0])) {
        console.error('Invalid dataColumns format:', dataColumns);
        return; // Exit function if dataColumns is not correctly formatted
    }

    var categoryColors = [
        'rgba(179, 176, 181, 0.6)', // Gray with opacity for "Below 50%"
        'rgba(99, 83, 113, 0.7)',  // Light purple with opacity for "50 - 80%"
        'rgba(53, 35, 68, 0.8)', // Dark purple with opacity for "Above 80%"
    ];

    var chart = c3.generate({
        bindto: uniqueId3,
        size: { width: 300, height: 200 },
        data: {
            columns: dataColumns,
            type: 'bar',
            color: function (color, d) {
                if (d.id === 'Originations' && typeof d.index !== 'undefined') {
                    return categoryColors[d.index]; // Apply color based on index
                }
                return color; // Default color
            }
        },
        axis: {
            x: {
                type: 'category',
                tick: { rotate: 0 },
                categories: ['Below 50%', '50 - 80%', 'Above 80%']
            },
            y: { show: false } // Hide the y-axis
        },
        bar: {
            width: { ratio: 1 },  // Widen bars to 1 for a fuller appearance
            space: 0.2, // Add space between bars
            centered: true,
        },
        tooltip: {
            format: {
                value: function (value, ratio, id, index) {
                    return value;
                }
            },
            contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
                var categoryNames = {
                    0: 'Below 50%',
                    1: '50 - 80%',
                    2: 'Above 80%',
                };
                var html = '<table class="c3-tooltip"><tbody>';
                d.forEach(function (data) {
                    var categoryName = categoryNames[data.index];
                    var value = defaultValueFormat(data.value, data.ratio, data.id, data.index);
                    html += `<tr class="c3-tooltip-name-${data.id}">
                                <td class="name">${categoryName}</td>
                                <td class="value">${value}</td>
                            </tr>`;
                });
                html += '</tbody></table>';
                return html;
            }
        },
        transition: { duration: 500 },
        padding: { bottom: 0, right: 0 },
        legend: { show: false },

        // Shift the bars to the left after rendering
        onrendered: function () {
            // Select all bars and shift them to the left by 25 pixels
            d3.selectAll(`${uniqueId3} .c3-chart-bars .c3-bar`).each(function() {
                var bar = d3.select(this);
                bar.attr('transform', 'translate(-25, 0)');  // Translate the bars 25px to the left
            });
        }
    });
}
