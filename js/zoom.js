var tractLayers = ['hover-0', 'hover-11', 'hover-12', 'hover-13', 'hover-14', 
                        'hover-21', 'hover-22', 'hover-23', 'hover-24', 
                        'hover-31', 'hover-32', 'hover-33', 'hover-34', 
                        'hover-41', 'hover-42', 'hover-43', 'hover-44', 
                   'hover-line-0', 'hover-line-11', 'hover-line-12', 'hover-line-13', 'hover-line-14', 
                        'hover-line-21', 'hover-line-22', 'hover-line-23', 'hover-line-24', 
                        'hover-line-31', 'hover-line-32', 'hover-line-33', 'hover-line-34', 
                        'hover-line-41', 'hover-line-42', 'hover-line-43', 'hover-line-44',
                   'info-0', 'info-11', 'info-12', 'info-13', 'info-14', 
                        'info-21', 'info-22', 'info-23', 'info-24', 
                        'info-31', 'info-32', 'info-33', 'info-34', 
                        'info-41', 'info-42', 'info-43', 'info-44', 
                   'circ-0', 'circ-1', 'circ-2', 'circ-31', 'circ-32', 'circ-33', 'circ-4'
                  ];

function zoomEvent(map, tractLayers) {
    map.on('zoom', () => {
        var zoomLevel = map.getZoom();
        if (zoomLevel < 4) {
            map.setLayoutProperty('msa-circle', 'visibility', 'none');
            map.setLayoutProperty('msa', 'visibility', 'none');
            map.setLayoutProperty('county-circle', 'visibility', 'none');
            map.setLayoutProperty('county', 'visibility', 'none');
            map.setLayoutProperty('holc-id', 'visibility', 'none');
            map.setLayoutProperty('holc-outline', 'visibility', 'none');
            map.setLayoutProperty('road-secondary-tertiary', 'visibility', 'none');
            tractLayers.forEach(function(layer) {
              map.setLayoutProperty(layer, 'visibility', 'none');
            });
        }
        else if (zoomLevel >= 4 && zoomLevel < 5.5) {
            map.setLayoutProperty('msa-circle', 'visibility', 'visible');
            map.setLayoutProperty('msa', 'visibility', 'visible');
            map.setLayoutProperty('county-circle', 'visibility', 'none');
            map.setLayoutProperty('county', 'visibility', 'none');
            map.setLayoutProperty('holc-id', 'visibility', 'none');
            map.setLayoutProperty('holc-outline', 'visibility', 'none');
            map.setLayoutProperty('road-secondary-tertiary', 'visibility', 'none');
            tractLayers.forEach(function(layer) {
              map.setLayoutProperty(layer, 'visibility', 'none');
            });
        } else if (zoomLevel >= 5.5 && zoomLevel < 9) {
            map.setLayoutProperty('msa-circle', 'visibility', 'none');
            map.setLayoutProperty('msa', 'visibility', 'none');
            map.setLayoutProperty('county-circle', 'visibility', 'visible');
            map.setLayoutProperty('county', 'visibility', 'visible');
            map.setLayoutProperty('holc-id', 'visibility', 'none');
            map.setLayoutProperty('holc-outline', 'visibility', 'none');
            map.setLayoutProperty('road-secondary-tertiary', 'visibility', 'none');
            tractLayers.forEach(function(layer) {
              map.setLayoutProperty(layer, 'visibility', 'none');
            });
        } else if (zoomLevel >= 9 && zoomLevel < 12.5) {
            map.setLayoutProperty('msa-circle', 'visibility', 'none');
            map.setLayoutProperty('msa', 'visibility', 'none');
            map.setLayoutProperty('county-circle', 'visibility', 'none');
            map.setLayoutProperty('county', 'visibility', 'none');
            map.setLayoutProperty('holc-id', 'visibility', 'visible');
            map.setLayoutProperty('holc-outline', 'visibility', 'visible');
            map.setLayoutProperty('road-street-low', 'visibility', 'none');
            map.setLayoutProperty('road-secondary-tertiary', 'visibility', 'visible');
            tractLayers.forEach(function(layer) {
              map.setLayoutProperty(layer, 'visibility', 'visible');
            });
        } else {
            map.setLayoutProperty('msa-circle', 'visibility', 'none');
            map.setLayoutProperty('msa', 'visibility', 'none');
            map.setLayoutProperty('county-circle', 'visibility', 'none');
            map.setLayoutProperty('county', 'visibility', 'none');
            map.setLayoutProperty('holc-id', 'visibility', 'visible');
            map.setLayoutProperty('holc-outline', 'visibility', 'visible');
            map.setLayoutProperty('road-street-low', 'visibility', 'visible');
            tractLayers.forEach(function(layer) {
              map.setLayoutProperty(layer, 'visibility', 'visible');
            });
        }
    });
}
