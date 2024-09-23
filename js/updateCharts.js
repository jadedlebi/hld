function updateChartForYear(alphaYear, feature) {
    var yearIndex = alphaYear - 1981;
    var highlightColor = '#8F98A8'; // Dark gray for the selected year
    var defaultColor = '#E5E6E8'; // Light gray for non-selected years

    d3.selectAll('.c3-bars-Median .c3-bar').style('fill', defaultColor);
    d3.select('.c3-bars-Median .c3-bar-' + yearIndex).style('fill', highlightColor);
    d3.selectAll('.c3-circle').attr('r', 2.5)
                              .style('stroke', '')
                              .style('stroke-width', '');
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
        console.warn("No HRI data available for the selected year:", alphaYear);
    }
    var pocData = myPopup.pocChartData(alphaYear, feature);
    if (pocData) {
        generateChart3(pocData, '#' + uniqueId3);
    } else {
        document.getElementById(uniqueId3).innerHTML = '<div style="font-style: italic; text-align: center;">POC data is not available for this metro area.</div>';
        console.warn("No POC data available for the selected year:", alphaYear);
    }
}
