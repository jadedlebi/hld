// https://www.compart.com/en/unicode
// ❚❚ heavy vertical bar (U+275A)
// ▶ black right-pointing triangle (U+25B6)

var circLayers = ['circ-0', 'circ-1', 'circ-2', 'circ-31', 'circ-32', 'circ-33', 'circ-4'];

var countyLayer = ['county-circle'];

var msaLayer = ['msa-circle']

var fillLayers = ['info-0', 'info-11', 'info-12', 'info-13', 'info-14', 
                        'info-21', 'info-22', 'info-23', 'info-24', 
                        'info-31', 'info-32', 'info-33', 'info-34', 
                        'info-41', 'info-42', 'info-43', 'info-44'
                 ];

var hoverFillLayers = ['hover-0', 'hover-11', 'hover-12', 'hover-13', 'hover-14', 
                        'hover-21', 'hover-22', 'hover-23', 'hover-24', 
                        'hover-31', 'hover-32', 'hover-33', 'hover-34', 
                        'hover-41', 'hover-42', 'hover-43', 'hover-44'
                 ];
var hoverLineLayers = ['hover-line-0', 'hover-line-11', 'hover-line-12', 'hover-line-13', 'hover-line-14', 
                 'hover-line-21', 'hover-line-22', 'hover-line-23', 'hover-line-24', 
                 'hover-line-31', 'hover-line-32', 'hover-line-33', 'hover-line-34', 
                 'hover-line-41', 'hover-line-42', 'hover-line-43', 'hover-line-44'
                ];

var alphaYear = 1981;

function updateMap(map, circLayers, fillLayers, input, updateChartForYear) {
    var year = typeof input === 'object' ? parseInt(input.target.value) : input;
    var decade = Math.floor(year / 10) % 10;
    var lastDigit = year.toString().slice(-1);
    var origField = 'orig_' + decade + lastDigit; 
    var circField = 'circ_' + decade + lastDigit;
    var minpopField = 'minpop' + (Math.floor(year / 10) * 10).toString().slice(-2);
    var interpolation;
    var stroke;

    $('#slider-label').html('<strong>' + year + '</strong>');

    circLayers.forEach(function(cLayer) {
        switch (decade) {
            case 8: // 1980s
                interpolation = [
                    'interpolate', ['linear'], ['to-number', ['get', circField]],
                    0, 0,
                    1, 5, 
                    10, 30
                ];
                stroke = [
                    'case',
                    ['==', ['get', origField], 0], 0,
                    1
                ];
                break;
            case 9: // 1990s
                interpolation = [
                    'interpolate', ['linear'], ['to-number', ['get', circField]],
                    0, 0, 
                    1, 3,
                    5, 30,
                ];
                stroke = [
                    'case',
                    ['==', ['get', origField], 0], 0,
                    1
                ];
                break;
            case 0: // 2000s
                interpolation = [
                    'interpolate', ['linear'], ['to-number', ['get', circField]],
                    0, 0, 
                    1, 3,
                    5, 30,
                ];
                stroke = [
                    'case',
                    ['==', ['get', origField], 0], 0,
                    1
                ];
                break;
            case 1: // 2010s
                interpolation = [
                    'interpolate', ['linear'], ['to-number', ['get', circField]],
                    0, 0, 
                    1, 3,
                    5, 30,
                ];
                stroke = [
                    'case',
                    ['==', ['get', origField], 0], 0,
                    1
                ];
                break;
            case 2: // 2020s
                interpolation = [
                    'interpolate', ['linear'], ['to-number', ['get', circField]],
                    0, 0, 
                    1, 3,
                    5, 30,
                ];
                stroke = [
                    'case',
                    ['==', ['get', origField], 0], 0,
                    1
                ];
                break;
            default:
                interpolation = [
                    'interpolate', ['linear'], ['to-number', ['get', circField]],
                    0, 0,
                    1, 5, 
                    20, 30
                ];
                stroke = [
                    'case',
                    ['==', ['get', origField], 0], 0,
                    1
                ];    
                break;
        }
        map.setPaintProperty(cLayer, 'circle-radius', interpolation);
        map.setPaintProperty(cLayer, 'circle-stroke-width', stroke);
    });

    msaLayer.forEach(function(cLayer) {
        switch (decade) {
            case 8: // 1980s
                interpolation = [
                    'interpolate', ['linear'], ['to-number', ['get', origField]],
                    0, 0,
                    1000, 5, 
                    40000, 30
                ];
                stroke = [
                    'case',
                    ['==', ['get', origField], 0], 0,
                    1.5
                ];
                break;
            case 9: // 1990s
                interpolation = [
                    'interpolate', ['linear'], ['to-number', ['get', origField]],
                    0, 0,
                    900, 3,
                    100000, 30
                ];
                stroke = [
                    'case',
                    ['==', ['get', origField], 0], 0,
                    1.5
                ];
                break;
            case 0: // 2000s
                interpolation = [
                    'interpolate', ['linear'], ['to-number', ['get', origField]],
                    0, 0,
                    1900, 3,
                    200000, 30
                ];
                stroke = [
                    'case',
                    ['==', ['get', origField], 0], 0,
                    1.5
                ];
                break;
            case 1: // 2010s
                interpolation = [
                    'interpolate', ['linear'], ['to-number', ['get', origField]],
                    0, 0,
                    1100, 3,
                    300000, 30
                ];
                stroke = [
                    'case',
                    ['==', ['get', origField], 0], 0,
                    1.5
                ];
                break;
            case 2: // 2020s
                interpolation = [
                    'interpolate', ['linear'], ['to-number', ['get', origField]],
                    0, 0,
                    2000, 3,
                    350000, 30,
                ];
                stroke = [
                    'case',
                    ['==', ['get', origField], 0], 0,
                    1.5
                ];
                break;
            default:
                interpolation = [
                    'interpolate', ['linear'], ['to-number', ['get', origField]],
                    0, 0,
                    1000, 5, 
                    40000, 30
                    ];
                stroke = [
                    'case',
                    ['==', ['get', origField], 0], 0,
                    1.5
                ];    
                break;
            }
        map.setPaintProperty(cLayer, 'circle-radius', interpolation);
        map.setPaintProperty(cLayer, 'circle-stroke-width', stroke);
    });

    countyLayer.forEach(function(cLayer) {
        map.setPaintProperty(cLayer, 'circle-radius', [
          'interpolate', ['linear'], ['to-number', ['get', origField]],
          0, 0,
          1000, 2, 
          5000, 10,
          50000, 30 
          ]);
    });

    fillLayers.forEach(function(fLayer) {
        map.setPaintProperty(fLayer, 'fill-color', [
            'case',
            ['>=', ['to-number', ['get', minpopField]], 80], '#4C3B5A',
            ['>=', ['to-number', ['get', minpopField]], 50], '#9F95A7',
            'transparent'
        ]);   
        map.setPaintProperty(fLayer, 'fill-outline-color', 'transparent');
        map.setPaintProperty(fLayer, 'fill-opacity', 0.7);
    });

    hoverFillLayers.forEach(function(hLayer) {
        map.setPaintProperty(hLayer, 'fill-color', [
            'case',
            ['>=', ['to-number', ['get', minpopField]], 80], '#352344',
            ['>=', ['to-number', ['get', minpopField]], 50], '#635371',
            '#A7A7A7'
        ]);   
        map.setPaintProperty(hLayer, 'fill-outline-color', 'transparent');
        map.setPaintProperty(hLayer, 'fill-opacity', 0.7);
    });

    hoverLineLayers.forEach(function(hhLayer) {
        map.setPaintProperty(hhLayer, 'line-color', [
            'case',
            ['>=', ['to-number', ['get', minpopField]], 80], '#1A0927',
            ['>=', ['to-number', ['get', minpopField]], 50], '#291539',
            '#7A7979'
        ]);   
        map.setPaintProperty(hhLayer, 'line-width', 2);
    });
   
    // updateChartForYear(year);
}

$(document).ready(function() {
    var intervalId; // Play button on slider
    var alphaYear = 1981; // Initialize alphaYear

    // Set the slider to the alpha year
    $('#slider').val(alphaYear).trigger('input');

    $('#play-button').click(function() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
            $(this).text('▶');
        } else {
            var currentValue = parseInt($('#slider').val());
            var endYear = 2021;

            intervalId = setInterval(function() {
                currentValue++;
                if (currentValue > endYear) {
                    clearInterval(intervalId);
                    intervalId = null;
                    $('#play-button').text('▶');
                } else {
                    $('#slider').val(currentValue).trigger('input');
                    alphaYear = currentValue; 
                }
            }, 500);

            $(this).text('❚❚');
        }
    });

    $('#slider').on('input change', function() {
        var year = parseInt($(this).val());
        alphaYear = year;
        
        // Assuming there is a function to update the map based on the year
        if (typeof updateMap === 'function') {
            updateMap(map, circLayers, fillLayers, year, updateChartForYear);
        }

        // Check and log the state of feature
        if (feature) {
            updateChartForYear(alphaYear, feature);
        } else {
            console.warn("Feature is not set. Cannot update charts without a valid feature.");
        }
    });
});
