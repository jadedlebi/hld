function generateChart2(dataColumns, uniqueId2) {
    var categoryColors = [
        'rgba(0, 128, 0, 0.6)', // Green with 60% opacity
        'rgba(0, 0, 255, 0.6)', // Blue with 60% opacity
        'rgba(255, 244, 0, 0.6)', // Yellow with 60% opacity
        'rgba(255, 0, 0, 0.6)'  // Red with 60% opacity
    ];
  
    var chart = c3.generate({
        bindto: uniqueId2,
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
        bar: {
            width: { ratio: 0.9 }  // Keep bars wide
        },
        axis: {
            x: {
                type: 'category',
                tick: { rotate: 0 },  // Keep ticks unrotated
                categories: ['A', 'B', 'C', 'D']  // X-axis categories
            },
            y: { show: false }  // Hide y-axis for simplicity
        },
        grid: {
            x: { show: false }  // Ensure grid lines are off
        },
        tooltip: {
            format: {
                value: function (value, ratio, id, index) {
                    return value;
                }
            },
            contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
                var categoryNames = {
                    0: 'A - "Best"',
                    1: 'B - "Still Desirable"',
                    2: 'C - "Definitely Declining"',
                    3: 'D - "Hazardous"'
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
        transition: { duration: 500 },  // Smooth transition for bars
        padding: { bottom: 0 },  // No extra padding
        legend: { show: false },  // Disable legend display
  
        // Adjust the bar position after rendering using a translation
        onrendered: function () {
            // Select all bars and apply a translation transform to shift them left by 20px
            d3.selectAll(`${uniqueId2} .c3-chart-bars .c3-bar`).each(function() {
                var bar = d3.select(this);
                bar.attr('transform', 'translate(-17.5, 0)');  // Translate the bars by 20 pixels to the left
            });
        }
    });
  }
