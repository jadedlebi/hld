var fillLayers = ['info-0', 'info-1', 'info-2', 'info-31', 'info-32', 'info-33', 'info-4'];
var hoverLayers = ['hover-0', 'hover-1', 'hover-2', 'hover-31', 'hover-32', 'hover-33', 'hover-4', 'hover-line-0', 'hover-line-1', 'hover-line-2', 'hover-line-31', 'hover-line-32', 'hover-line-33', 'hover-line-4'];

function hoverEvents(map, hoverLayers, fillLayers) {
    map.on('mouseenter', hoverLayers, () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', hoverLayers, () => {
        map.getCanvas().style.cursor = '';
    });

    map.on("mousemove", function(e) {
        var features = map.queryRenderedFeatures(e.point, { layers: fillLayers });
        map.getCanvas().style.cursor = (features.length) ? "pointer" : "";

        if (features.length) {
            var filter = ["==", ["get", "geoid10"], features[0].properties.geoid10];
            hoverLayers.forEach(function(layer) {
                map.setFilter(layer, filter);
            });
        } else {
            hoverLayers.forEach(function(layer) {
                map.setFilter(layer, ["==", ["get", "geoid10"], ""]);
            });
        }
    });

    map.on("mouseleave", hoverLayers, function() {
        map.getCanvas().style.cursor = "";
        hoverLayers.forEach(function(layer) {
            map.setFilter(layer, ["==", ["get", "geoid10"], ""]);
        });
    });
}
