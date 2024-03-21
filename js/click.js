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

var myPopup = myPopup || {}; 
var feature = null;
var uniqueId1 = null;
var uniqueId2 = null;
var uniqueId3 = null;
var popup;
var minpopField = null;

var fillLayers = ['info-0', 'info-11', 'info-12', 'info-13', 'info-14', 
                    'info-21', 'info-22', 'info-23', 'info-24', 
                    'info-31', 'info-32', 'info-33', 'info-34', 
                    'info-41', 'info-42', 'info-43', 'info-44'
                 ];

function clickEvent(map, fillLayers, popupOffsets, alphaYear) {
    map.on('click', function(e) {
        var features = map.queryRenderedFeatures(e.point, { layers: fillLayers });
        if (features.length > 0) {
            feature = features[0]; 

            if (feature.properties.place === "") {
                place = "<div style='text-align: center;font-size:20px;'><b>" + feature.properties.county + ", " + feature.properties.state + "</b></div>"
            } else {
                place = "<div style='text-align: center;font-size:20px;'><b>" + feature.properties.place + " (" + feature.properties.county + ")</b></div>"
            }
            var tract = "<div style='text-align: center;font-size:15px;'><b>Tract ID: " + feature.properties.geoid10 + "</b></div>";
            if (alphaYear < 1990) {
                minPop = "<div style='text-align: center;'><b>" + decimalRound(feature.properties.minpop80) + "%</b></div>"
            } else if (alphaYear >= 1990 || alphaYear < 2000) {
                minPop = "<div style='text-align: center;'><b>" + decimalRound(feature.properties.minpop90) + "%</b></div>"
            } else if (alphaYear >= 2000 || alphaYear < 2010) {
                minPop = "<div style='text-align: center;'><b>" + decimalRound(feature.properties.minpop00) + "%</b></div>"
            } else if (alphaYear >= 2010 || alphaYear < 2020) {
                minPop = "<div style='text-align: center;'><b>" + decimalRound(feature.properties.minpop10) + "%</b></div>"
            } else if (alphaYear >= 2020) {
                minPop = "<div style='text-align: center;'><b>" + decimalRound(feature.properties.minpop20) + "%</b></div>"
            }
            var hriInterval = feature.properties.hri_int;
            if (hriInterval == 0) {
                hri = "<div style='text-align: center;'><b>N/A</b></div>"
            } else if (hriInterval == 1) {
                hri = "<div style='text-align: center;color:#008000'><b>A (" + feature.properties.hri_cont + ")</b></div>"
            } else if (hriInterval == 2) {
                hri = "<div style='text-align: center;color:#0000FF'><b>B (" + feature.properties.hri_cont + ")</b></div>"
            } else if (hriInterval == 3) {
                hri = "<div style='text-align: center;color:#B9B122'><b>C (" + feature.properties.hri_cont + ")</b></div>"
            } else if (hriInterval == 4) {
                hri = "<div style='text-align: center;color:#FF0000'><b>D (" + feature.properties.hri_cont + ")</b></div>"
            }
            var cbsa = "<h3 style=text-align:center;font-size:20px;>" + feature.properties.cbsa_name + "</h3>";
            var minhri =
                "<table style='width:90%;text-align:center'>" + 
                    "<tr>" + 
                        "<th style='width:50%;text-align:center'>HRI Score</th>" +
                        "<th style='width:50%;text-align:center'>Minority Pop.</th>" +
                    "</tr>" + 
                    "<tr style='font-size:20px;text-align:center'>" + 
                        "<th style='width:60%;text-align:center'>" + 
                            hri +
                        "</th>" +
                        "<th style='width:40%;text-align:center'>" + 
                            minpopField +
                        "</th>" +
                    "</tr>" +
                "</table>";
            var originationData = [['Year'], ['Originations']];
            var medianData = ['Median'];
           
            for (let year = 1981; year <= 2021; year++) {
                let origKey = `orig_${String(year).slice(-2)}`;
                let medKey = `med_${String(year).slice(-2)}`;
                originationData[0].push(year); 
                originationData[1].push(feature.properties[origKey] || 0); 
                medianData.push(feature.properties[medKey] || 0); 
            }

            console.log("Before calling hriChartData, feature is:", feature);
            myPopup.hriChartData = function hriChartData(selectedYear, feature) {
                console.log('hriChartData called with feature:', feature);
                let yearSuffix = String(selectedYear).slice(-2);
                let categories = ['A', 'B', 'C', 'D'];
                let values = [];
                let hasData = false;
            
                categories.forEach(category => {
                    let key = `hri${yearSuffix}${category.toLowerCase()}`;
                    console.log(`Accessing key: ${key}`);
                    let value = parseInt(feature.properties[key], 10) || 0;
                    console.log(`Value for ${key}: ${value}`);
                    if (value > 0) hasData = true;
                    values.push(value);
                });
            
                if (!hasData) return null; // Return null or similar flag if no data is available
                return [categories, ['Originations'].concat(values)]; // Ensure the first element is the series name
            }       
              
            myPopup.pocChartData = function pocChartData(selectedYear, feature) {
                console.log('pocChartData called with feature:', feature);
                let yearSuffix = String(selectedYear).slice(-2);
                let categories = ['A', 'B', 'C']; // Use uppercase for display purposes
                let values = ['Originations']; // First element as the series name (optional)
            
                categories.forEach(category => {
                    let key = `min${yearSuffix}${category.toLowerCase()}`; // Assuming keys are lowercase
                    let value = parseInt(feature.properties[key], 10) || 0;
                    values.push(value);
                });
                return [categories, values];
            }
            
            var hriData = myPopup.hriChartData(alphaYear, feature);
            console.log(hriData);
            var pocData = myPopup.pocChartData(alphaYear, feature);
            console.log(pocData);
            
            uniqueId1 = 'origChart-' + Date.now(); 
            uniqueId2 = 'hriChart-' + Date.now();
            uniqueId3 = 'pocChart-' + Date.now();

            var origPopup = `<div id="${uniqueId1}" style="width: 300px; height: 200px;"></div>`;
            var hriPopup;
                if (hriData === null) {
                    hriPopup = `<div id="${uniqueId2}" style="width: 300px; height: 150px; font-style: italic; text-align: center;">HRI data is not available for this metro area.</div>`;
                } else {
                    hriPopup = `<div id="${uniqueId2}" style="width: 300px; height: 150px;"></div>`; 
                    generateChart2(hriData, '#' + uniqueId2);
                }
            var pocPopup = `<div id="${uniqueId3}" style="width: 300px; height: 150px;"></div>`;
            var tabCharts = 
                `<div id="chartTabs">
                    <div class="tabs">
                        <button class="tablinks active" onclick="openChart(event, 'hriChart')">Avg. Originations by HRI Grade</button>
                        <button class="tablinks" onclick="openChart(event, 'pocChart')">Origination Breakdown by People of Color</button>
                    </div>
                    <div id="hriChart" class="tabcontent">
                        <div id="${uniqueId2}">` + hriPopup + `</div>
                    </div>
                    <div id="pocChart" class="tabcontent" style="display:none;">
                    <div id="${uniqueId3}">` + pocPopup + `</div>
                    </div>
                </div>`;
            var toggleButton = `
                <div id="toggleButton" onclick="toggleChartsDisplay()" style="cursor: pointer; user-select: none; display: flex; align-items: center;">
                    <div id="triangle" class="triangle-right" style="margin-right: 5px;"></div>
                    <span id="toggleText">Show Area Statistics</span>
                </div>`;
            var chartsContainer = 
                `<div id="chartsContainer" style="display: none;">
                    ${cbsa}
                    <div style="font-style: italic; text-align: center; margin-top: -10px;">Area Statistics</div>
                    ${tabCharts}
                </div>`;
            popup = new mapboxgl.Popup({ offset: popupOffsets, maxWidth: "350px" })
                .setLngLat(e.lngLat)
                .setHTML( 
                    place + tract + minhri + 
                    origPopup + 
                    toggleButton + 
                    chartsContainer
                )
                .addTo(map);
            generateChart1([originationData[0], originationData[1], medianData], '#' + uniqueId1);
            generateChart3(pocData, '#' + uniqueId3);
            updateChartForYear(alphaYear, feature);
        }
    });
}

function openChart(evt, chartName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(chartName).style.display = "block";
    evt.currentTarget.className += " active";
}
  
// Call the openChart function for the first tab when the page loads
document.addEventListener('DOMContentLoaded', function() {
openChart(event, 'hriChart');
});

function toggleChartsDisplay() {
    var chartsContainer = document.getElementById('chartsContainer');
    var triangle = document.getElementById('triangle');
    var toggleText = document.getElementById('toggleText');
    
    if (chartsContainer.style.display === "none") {
        chartsContainer.style.display = "block";
        triangle.className = "triangle-down"; // Set to triangle pointing down
        toggleText.innerText = "Hide Area Statistics";
    } else {
        chartsContainer.style.display = "none";
        triangle.className = "triangle-right"; // Set to triangle pointing right
        toggleText.innerText = "Show Area Statistics";
    }
}
