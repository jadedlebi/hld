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
        width: { ratio: 0.9 }
      },
      axis: {
          x: {
              type: 'category',
              tick: { rotate: 0 },
              categories: ['A', 'B', 'C', 'D']
          },
          y: { show: false }
      },
      tooltip: {
          format: {
              value: function (value, ratio, id, index) {
                // Your value formatting
                return value;
              }
          },
          contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
            // Map the index positions to the correct category names.
            var categoryNames = {
                0: 'A - "Best"',
                1: 'B - "Still Desirable"',
                2: 'C - "Definitely Declining"',
                3: 'D - "Hazardous"'
            };
    
            // Start the tooltip HTML.
            var html = '<table class="c3-tooltip"><tbody>';
    
            // Iterate over the data points to create tooltip entries.
            d.forEach(function (data) {
                // The category index should correspond to the order of the categories.
                var categoryName = categoryNames[data.index];
    
                // Get the value for the tooltip.
                var value = defaultValueFormat(data.value, data.ratio, data.id, data.index);
    
                // Generate the HTML for the tooltip row.
                html += `<tr class="c3-tooltip-name-${data.id}">
                            <td class="name">${categoryName}</td>
                            <td class="value">${value}</td>
                        </tr>`;
            });
    
            // Close the tooltip HTML.
            html += '</tbody></table>';
    
            return html;
        }
      },
      transition: { duration: 500 },
      padding: { bottom: 0, right: 0 },
      legend: { show: false }
    });
}
