function generateChart1(dataColumns, uniqueId) {
  var chart = c3.generate({
    bindto: uniqueId,
    size: { width: 300, height: 200 },
    onmouseover: function (data) {
      // When hovering, re-apply the highlighting based on `currentYear`
      updateChartForYear(dataColumns, uniqueId);
    },
    onmouseout: function (data) {
      // Optional: Handle any style reversion on mouse out
      // This might not be needed if `updateChartForYear` already manages styles correctly
    },
    data: {
      x: 'Year',
      columns: dataColumns,
      types: {
        Originations: 'line', 
        Median: 'bar',
      },
      colors: {
        Originations: '#103457',
        Median: '#E5E6E8',
      },
      names: {
          // This directly renames the tooltip labels
          Originations: 'Originations', // Keeps the original name
          Median: 'Area Median' // Changes 'Median' to 'Area Median'
      }
    },
    axis: {
      x: {
        type: 'category',
        tick: {
          rotate: 0, // Rotate tick labels to 0 degrees (horizontal)
          multiline: false, // Disable multiline to prevent automatic wrapping
          culling: {
              max: 10 // Adjust 'max' as needed to reduce label density
          }
        },
        categories: Array.from({length: 41}, (_, i) => 1981 + i)
      }
    },
    transition: {
      duration: 500 // Transition duration in milliseconds
    },
    tooltip: {
      grouped: true, // Ensure tooltips are grouped for all series
      format: {
          // Optional: Use if you need to customize the tooltip further than just renaming
          name: function (name, ratio, id, index) {
              // You can add conditional logic here if needed
              return name; // Returns the modified name from `names` configuration
          }
      }
    },
    point: {
      show: function(d) { return d.id !== 'Median'; } // Hide points only for 'Median'
    },
    padding: { bottom: 40, right: 20 },
    legend: { show: false }
  });
}
