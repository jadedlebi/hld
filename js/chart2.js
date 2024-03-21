function generateChart2(dataColumns, uniqueId2) {
  var chart = c3.generate({ 
      bindto: uniqueId2,
      size: { width: 300, height: 200 },
      data: {
          columns: dataColumns,
          type: 'bar', 
          colors: {
              a: '#008000',
              b: '#0000FF',
              c: '#FFFF00',
              d: '#FF0000',
          }
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
              name: function (name, ratio, id, index) {
                  // Define your category renames here
                  var categoryRenames = {
                      'A': '"Best"',
                      'B': '"Still Desirable"',
                      'C': '"Definitely Declining"',
                      'D': '"Hazardous"'
                  };
                  // Use the index to access the original category name from the 'x' column
                  var originalCategoryName = chart.internal.config.axis_x_categories[index];
                  // Return the renamed category for the tooltip if it exists, or the original name
                  return categoryRenames[originalCategoryName] || originalCategoryName;
              }
          }
      },
      transition: { duration: 500 },
      padding: { bottom: 0, right: 0 },
      legend: { show: false }
    });
}
