function updateChartForYear(selectedYear) {
    var yearIndex = selectedYear - 1981; // Example calculation, adjust based on your data structure

    // Reset any previously applied styles for highlighting
    // This sets all bars back to the default color
    d3.selectAll('.c3-bar').style('fill', '#E5E6E8'); // Assuming you have a default or initial color set elsewhere

    // Apply a new fill color to highlight the bar for the selected year
    // Assuming 'Median' is your data series for medians
    d3.selectAll('.c3-bars-Median .c3-bar-' + yearIndex)
      .style('fill', '#8F98A8'); // Example: Change fill color to red for highlighting

    // Note: Adjust the class names according to your actual data series names and structure

    // Reset styles for all points by setting radius to default and removing custom styles
    d3.selectAll('.c3-circle').attr('r', 2.5) // Assuming 2.5 is your default radius
                              .style('stroke', '') // Reset custom stroke
                              .style('stroke-width', ''); // Reset custom stroke width

    // Highlight the circle (data point) for the selected year
    d3.selectAll('.c3-circles .c3-circle-' + yearIndex)
      .each(function() {
          d3.select(this)
            .attr('r', 2.5) // Increase the radius for the highlighted point
            .style('stroke', '#103457') // Red stroke for highlighted point
            .style('stroke-width', '3px'); // Wider stroke width for highlighted point
      });
}
