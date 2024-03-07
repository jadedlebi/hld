var tractLayers = ['hover-0', 'hover-1', 'hover-2', 'hover-31', 'hover-32', 'hover-33', 'hover-4', 'info-0', 'info-1', 'info-2', 'info-31', 'info-32', 'info-33', 'info-4', 'hld-tract-0', 'hld-tract-1', 'hld-tract-2', 'hld-tract-3', 'hld-tract-4'];

function zoomEvent(map, tractLayers) {
    map.on('zoom', () => {
        var zoomLevel = map.getZoom();
        if (zoomLevel < 5) {
            map.setLayoutProperty('hld-msa', 'visibility', 'visible');
            map.setLayoutProperty('hld-county', 'visibility', 'none');
            map.setLayoutProperty('holc-id', 'visibility', 'none');
            map.setLayoutProperty('holc-outline', 'visibility', 'none');
            map.setLayoutProperty('road-secondary-tertiary', 'visibility', 'none');
            tractLayers.forEach(function(layer) {
              map.setLayoutProperty(layer, 'visibility', 'none');
            });
        } else if (zoomLevel >= 5 && zoomLevel < 8) {
            map.setLayoutProperty('hld-msa', 'visibility', 'none');
            map.setLayoutProperty('hld-county', 'visibility', 'visible');
            map.setLayoutProperty('holc-id', 'visibility', 'none');
            map.setLayoutProperty('holc-outline', 'visibility', 'none');
            map.setLayoutProperty('road-secondary-tertiary', 'visibility', 'none');
            tractLayers.forEach(function(layer) {
              map.setLayoutProperty(layer, 'visibility', 'none');
            });
        } else if (zoomLevel >= 8 && zoomLevel < 12.5) {
            map.setLayoutProperty('hld-msa', 'visibility', 'none');
            map.setLayoutProperty('hld-county', 'visibility', 'none');
            map.setLayoutProperty('holc-id', 'visibility', 'visible');
            map.setLayoutProperty('holc-outline', 'visibility', 'visible');
            map.setLayoutProperty('road-street-low', 'visibility', 'none');
            map.setLayoutProperty('road-secondary-tertiary', 'visibility', 'visible');
            tractLayers.forEach(function(layer) {
              map.setLayoutProperty(layer, 'visibility', 'visible');
            });
        } else {
            map.setLayoutProperty('hld-msa', 'visibility', 'none');
            map.setLayoutProperty('hld-county', 'visibility', 'none');
            map.setLayoutProperty('holc-id', 'visibility', 'visible');
            map.setLayoutProperty('holc-outline', 'visibility', 'visible');
            map.setLayoutProperty('road-street-low', 'visibility', 'visible');
            tractLayers.forEach(function(layer) {
              map.setLayoutProperty(layer, 'visibility', 'visible');
            });
        }
    });
}
