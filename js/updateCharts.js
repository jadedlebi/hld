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
    }
    var pocData = myPopup.pocChartData(alphaYear, feature);
    if (pocData) {
        generateChart3(pocData, '#' + uniqueId3);
    } else {
        console.error('POC data is not available for this metro area or feature is invalid.');
    }

    // Determine the minpop field name based on the selected year
    var decade = Math.floor(alphaYear / 10) * 10; // This will round down to the nearest decade
    var minpopFieldKey = 'minpop' + String(decade).slice(-2); // Use the last two digits of the decade
    var minpopValue = decimalRound(feature.properties[minpopFieldKey]);
    var minpopFieldElement = document.getElementById('minpopField');
    if (minpopFieldElement) {
        if (minpopValue) {
            var formattedValue = decimalRound(minpopValue) + '%';
            var color = minpopValue < 50 ? '#A7A7A7' :
                        minpopValue >= 50 && minpopValue < 80 ? '#9766BF' : '#2E0B4A';
            minpopFieldElement.innerHTML = `<span style="color: ${color};">${formattedValue}</span>`;
        } else {
            minpopFieldElement.textContent = 'Data not available';
        }
    } else {
        console.error('No element with id `minpopField` found in the popup.');
    }
}
