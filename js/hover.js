var fillLayers = ['info-0', 'info-11', 'info-12', 'info-13', 'info-14', 
                        'info-21', 'info-22', 'info-23', 'info-24', 
                        'info-31', 'info-32', 'info-33', 'info-34', 
                        'info-41', 'info-42', 'info-43', 'info-44'
                 ];
var hoverLayers = ['hover-0', 'hover-11', 'hover-12', 'hover-13', 'hover-14', 
                        'hover-21', 'hover-22', 'hover-23', 'hover-24', 
                        'hover-31', 'hover-32', 'hover-33', 'hover-34', 
                        'hover-41', 'hover-42', 'hover-43', 'hover-44',
                   'hover-line-0', 'hover-line-11', 'hover-line-12', 'hover-line-13', 'hover-line-14', 
                        'hover-line-21', 'hover-line-22', 'hover-line-23', 'hover-line-24', 
                        'hover-line-31', 'hover-line-32', 'hover-line-33', 'hover-line-34', 
                        'hover-line-41', 'hover-line-42', 'hover-line-43', 'hover-line-44'
                  ];
var popup = new mapboxgl.Popup({ offset: popupOffsets, maxWidth: "350px", closeButton: false, closeOnClick: false });

function hoverEvents(map, hoverLayers, fillLayers) {
    map.on('mouseenter', hoverLayers, () => {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', hoverLayers, () => {
        map.getCanvas().style.cursor = '';
    });

    let currentFeatureId = null; // To track the currently hovered feature
    map.on('mousemove', 'msa', function(e) {
        const featureId = e.features[0].id || e.features[0].properties.id;
        if (featureId !== currentFeatureId) {
            currentFeatureId = featureId; // Update the currently hovered feature ID
            popup
                .setLngLat(e.lngLat)
                .setHTML('<b style=text-align:center;>' + e.features[0].properties.cbsa_name + '</b><br>' +
                    '<p style=font-size:10px;font-style:italic;text-align:center;>Zoom in to view counties.</p></br>'
                )
                .addTo(map);
        }
    });
    map.on('mouseleave', 'county', function() {
        popup.remove(); 
        currentFeatureId = null;
    });
    map.on('mousemove', 'county', function(e) {
        const featureId = e.features[0].id || e.features[0].properties.id;
        if (featureId !== currentFeatureId) {
            currentFeatureId = featureId; // Update the currently hovered feature ID
            popup
                .setLngLat(e.lngLat)
                .setHTML('<b style=text-align:center;font-size:18px;>' + 
                    e.features[0].properties.county + ', ' + e.features[0].properties.state + '</b><br>' +
                    '<p style=font-size:12px;>' + e.features[0].properties.cbsa_name + '<br>' +
                    '<p style=font-size:10px;font-style:italic;text-align:center;margin-top:26px;>Zoom in to view Census tracts.</p></br>'
                )
                .addTo(map);
        }
    });
    map.on('mouseleave', 'msa', function() {
        popup.remove(); 
        currentFeatureId = null;
    });

    map.on("mousemove", function(e) {
        var features1 = map.queryRenderedFeatures(e.point, { layers: fillLayers });
        var features2 = map.queryRenderedFeatures(e.point, { layers: ['msa'] });
        var features3 = map.queryRenderedFeatures(e.point, { layers: ['county'] });
        map.getCanvas().style.cursor = (features1.length) ? "pointer" : "";
        var filter;

        if (features1.length) {
            var filter = ["==", ["get", "geoid10"], features1[0].properties.geoid10];
            hoverLayers.forEach(function(layer) {
                map.setFilter(layer, filter);
            });
        } else {
            hoverLayers.forEach(function(layer) {
                map.setFilter(layer, ["==", ["get", "geoid10"], ""]);
            });
        }
        if (features2.length) {
            var filter = ["==", ["get", "cbsa_state"], features2[0].properties.cbsa_state];
            map.setFilter('msa-hover', filter);
        } else { 
            map.setFilter('msa-hover', ["==", ["get", "cbsa_state"], ""]);
        }
        if (features3.length) {
            var filter = ["==", ["get", "geoid5"], features3[0].properties.cbsa_state];
            map.setFilter('county-hover', filter);
        } else { 
            map.setFilter('county-hover', ["==", ["get", "geoid5"], ""]);
        }   
    });

    map.on("mouseleave", hoverLayers, function() {
        map.getCanvas().style.cursor = "";
        hoverLayers.forEach(function(layer) {
            map.setFilter(layer, ["==", ["get", "geoid10"], ""]);
        });
        map.setFilter('msa-hover', ["==", ["get", "cbsa_state"], ""]);
        map.setFilter('county-hover', ["==", ["get", "geoid5"], ""]);
    });
}
