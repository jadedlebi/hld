// https://www.compart.com/en/unicode
// ❚❚ heavy vertical bar (U+275A)
// ▶ black right-pointing triangle (U+25B6)

var circLayers = ['hld-msa', 'hld-county', 'hld-tract-0', 'hld-tract-1', 'hld-tract-2', 'hld-tract-3', 'hld-tract-4'];
var fillLayers = ['info-0', 'info-1', 'info-2', 'info-31', 'info-32', 'info-33', 'info-4'];
var alphaYear = 1981;

function updateMap(map, circLayers, fillLayers, input, updateChartForYear) {
    var year = typeof input === 'object' ? parseInt(input.target.value) : input;
    var origField = 'orig_hu_' + year.toString().slice(-2); // Adjusts to your naming convention
    var minpopField = 'minpop' + (Math.floor((year - 1) / 10) * 10).toString().slice(-2); // Finds the correct decade

    // Update the slider label to reflect the current year
    $('#slider-label').html('<strong>Year: ' + year + '</strong>');

    // Update the map layer with the new data
    circLayers.forEach(function(cLayer) {
        map.setPaintProperty(cLayer, 'circle-radius', [
            'interpolate', ['linear'], ['get', origField],
            1, 2, // Small circle size for small loan values
            15, 10 // Larger circle size for larger loan values
        ]);
    });

    fillLayers.forEach(function(fLayer) {
        map.setPaintProperty(fLayer, 'fill-color', [
            'case',
            ['>=', ['get', minpopField], 80], '#4C3B5A',
            ['>=', ['get', minpopField], 50], '#9F95A7',
            'transparent'
        ]);
    });
    updateChartForYear(year);
}

// Assuming jQuery is used and is included before this script
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
                    alphaYear = currentValue; // Update the global alphaYear
                }
            }, 500);

            $(this).text('❚❚');
        }
    });

    $('#slider').on('input change', function() {
        var year = parseInt($(this).val());
        alphaYear = year; // Update the global alphaYear
        updateMap(map, circLayers, fillLayers, year, updateChartForYear);
    });
});
