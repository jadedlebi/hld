function updateChartForYear(alphaYear, feature) {
    var yearIndex = alphaYear - 1981;
    var highlightColor = '#8F98A8'; // Dark gray for the selected year
    var defaultColor = '#E5E6E8'; // Light gray for non-selected years

    // Reset bars in the Median series to the default color first
    d3.selectAll('.c3-bars-Median .c3-bar').style('fill', defaultColor);
    // Highlight the bar for the selected year in the Median series
    d3.select('.c3-bars-Median .c3-bar-' + yearIndex).style('fill', highlightColor);
    // Reset styles for all points by setting radius to default and removing custom styles
    d3.selectAll('.c3-circle').attr('r', 2.5)
                              .style('stroke', '')
                              .style('stroke-width', '');
    // Highlight the circle (data point) for the selected year
    d3.selectAll('.c3-circles .c3-circle-' + yearIndex)
      .each(function() {
          d3.select(this)
            .attr('r', 2.5) 
            .style('stroke', '#103457')
            .style('stroke-width', '3px'); 
      });

    var hriData = myPopup.hriChartData(alphaYear, feature);
    if (hriData) {
        generateChart2(hriData, '#' + uniqueId2);
    } else {
        document.getElementById(uniqueId2).innerHTML = '<div style="font-style: italic; text-align: center;">HRI data is not available for this metro area.</div>';
    }
    var pocData = myPopup.pocChartData(alphaYear, feature);
    if (pocData) {
        generateChart3(pocData, '#' + uniqueId3);
    } else {
        console.error('POC data is not available for this metro area or feature is invalid.');
    }
}
