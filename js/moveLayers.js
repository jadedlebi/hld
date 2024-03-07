function moveMapLayers(map, popLayers) {
    var popLayers = ['hover-0', 'hover-1', 'hover-2', 'hover-31', 'hover-32', 'hover-33', 'hover-4', 'info-0', 'info-1', 'info-2', 'info-31', 'info-32', 'info-33', 'info-4'];
    
    popLayers.forEach(function(layer) {
        map.moveLayer(layer, 'holc-id');
        map.moveLayer(layer, 'road-label');
        map.moveLayer(layer, 'water');
    });
    map.moveLayer('hover-0','hover-line-0');
    map.moveLayer('hover-1','hover-line-1');
    map.moveLayer('hover-2','hover-line-2');
    map.moveLayer('hover-31','hover-line-31');
    map.moveLayer('hover-32','hover-line-32');
    map.moveLayer('hover-33','hover-line-33');
    map.moveLayer('hover-4','hover-line-4');
    map.moveLayer('holc-id', 'holc-outline');
    map.moveLayer('holc-outline', 'hld-tract-0');
    map.moveLayer('holc-id', 'hld-tract-1');
    map.moveLayer('holc-outline', 'hld-tract-2');
    map.moveLayer('holc-outline', 'hld-tract-3');
    map.moveLayer('holc-outline', 'hld-tract-4');
    map.moveLayer('holc-outline', 'road-label');
    map.moveLayer('holc-outline', 'water');
    map.moveLayer('holc-outline', 'national-park');
}
