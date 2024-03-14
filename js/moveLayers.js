function moveMapLayers(map, popLayers) {
    var popLayers = ['hover-0', 'hover-11', 'hover-12', 'hover-13', 'hover-14', 
                        'hover-21', 'hover-22', 'hover-23', 'hover-24', 
                        'hover-31', 'hover-32', 'hover-33', 'hover-34', 
                        'hover-41', 'hover-42', 'hover-43', 'hover-44',
                   'info-0', 'info-11', 'info-12', 'info-13', 'info-14', 
                        'info-21', 'info-22', 'info-23', 'info-24', 
                        'info-31', 'info-32', 'info-33', 'info-34', 
                        'info-41', 'info-42', 'info-43', 'info-44'
                   ];

    
    popLayers.forEach(function(layer) {
        map.moveLayer(layer, 'holc-id');
        map.moveLayer(layer, 'road-label');
        map.moveLayer(layer, 'water');
    });
    map.moveLayer('hover-0','hover-line-0');
    map.moveLayer('hover-11','hover-line-11');
    map.moveLayer('hover-12','hover-line-12');
    map.moveLayer('hover-13','hover-line-13');
    map.moveLayer('hover-14','hover-line-14');
    map.moveLayer('hover-21','hover-line-21');
    map.moveLayer('hover-22','hover-line-22');
    map.moveLayer('hover-23','hover-line-23');
    map.moveLayer('hover-24','hover-line-24');
    map.moveLayer('hover-31','hover-line-31');
    map.moveLayer('hover-32','hover-line-32');
    map.moveLayer('hover-33','hover-line-33');
    map.moveLayer('hover-34','hover-line-34');
    map.moveLayer('hover-41','hover-line-41');
    map.moveLayer('hover-42','hover-line-42');
    map.moveLayer('hover-43','hover-line-43');
    map.moveLayer('hover-44','hover-line-44');
    map.moveLayer('holc-id', 'holc-outline');
    map.moveLayer('holc-outline', 'circ-0');
    map.moveLayer('holc-outline', 'circ-1');
    map.moveLayer('holc-outline', 'circ-2');
    map.moveLayer('holc-outline', 'circ-31');
    map.moveLayer('holc-outline', 'circ-32');
    map.moveLayer('holc-outline', 'circ-33');
    map.moveLayer('holc-outline', 'circ-4');
    map.moveLayer('holc-outline', 'road-label');
    map.moveLayer('holc-outline', 'water');
    map.moveLayer('holc-outline', 'national-park');
}
