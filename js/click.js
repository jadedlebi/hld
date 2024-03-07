var markerHeight = 50, markerRadius = 10, linearOffset = 25;
var popupOffsets = {
    'top': [0, 0],
    'top-left': [0,0],
    'top-right': [0,0],
    'bottom': [0, -markerHeight],
    'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
    'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
    'left': [markerRadius, (markerHeight - markerRadius) * -1],
    'right': [-markerRadius, (markerHeight - markerRadius) * -1]
};

var fillLayers = ['info-0', 'info-1', 'info-2', 'info-31', 'info-32', 'info-33', 'info-4'];

var alphaYear = 1981;

function clickEvent(map, fillLayers, popupOffsets, alphaYear) {
    map.on('click', function(e) {
        var features = map.queryRenderedFeatures(e.point, { layers: fillLayers });
        if (features.length > 0) {
            var feature = features[0]; // Assuming the first feature is the desired one

            // Prepare data for the chart
            var originationData = [['Year'], ['Originations']];
            var medianData = ['Median'];

            for (let year = 1981; year <= 2021; year++) {
                let origKey = `orig_${String(year).slice(-2)}`;
                let medKey = `med_${String(year).slice(-2)}`;
                originationData[0].push(year); // Year
                originationData[1].push(feature.properties[origKey] || 0); // Origination value
                medianData.push(feature.properties[medKey] || 0); // Median value
            }
            var uniqueId = 'chart-' + Date.now(); // Creates a unique ID for the chart
            var popupContent = `<div id="${uniqueId}" style="width: 300px; height: 200px;"></div>`;
            new mapboxgl.Popup({ offset: popupOffsets, maxWidth: "350px" })
                .setLngLat(e.lngLat)
                .setHTML(popupContent)
                .addTo(map);

            generateChart1([originationData[0], originationData[1], medianData], '#' + uniqueId);
            updateChartForYear(alphaYear);
        }
    });
}
