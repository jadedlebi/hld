function generateChart3(dataColumns, uniqueId3) {
    var categoryColors = [
        'rgba(179, 176, 181, 0.6)', // Gray with opacity for "Below 50%"
        'rgba(99, 83, 113, 0.6)',  // Light purple with opacity for "50 - 80%"
        'rgba(53, 35, 68, 0.6)', // Dark purple with opacity for "Above 80%"
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
            y: { show: false }
        },
        bar: {
            width: {
                ratio: 0.5 // Adjust this value to make bars thinner or wider
            },
            centered: true,
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
                  0: 'Below 50%',
                  1: '50 - 80%',
                  2: 'Above 80%',
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
        padding: { bottom: 40, right: 20 },
        legend: { show: false }
    });
}
