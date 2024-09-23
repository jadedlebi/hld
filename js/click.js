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

let hriData = null;
let pocData = null;
var feature = null;
var myPopup = myPopup || {}; 
var uniqueId1 = null;
var uniqueId2 = null;
var uniqueId3 = null;
var uniqueId4 = null;
var popup;
var minpopField = null;

var fillLayers = ['info-0', 'info-11', 'info-12', 'info-13', 'info-14', 
                    'info-21', 'info-22', 'info-23', 'info-24', 
                    'info-31', 'info-32', 'info-33', 'info-34', 
                    'info-41', 'info-42', 'info-43', 'info-44'
                 ];

var currentYear = 1981; // Default year
var currentFeature = null; // Default feature

function clickEvent(map, fillLayers, popupOffsets, alphaYear) {
    map.on('click', function(e) {
        var features = map.queryRenderedFeatures(e.point, { layers: fillLayers });
        if (features.length > 0) {
            feature = features[0];
            
            currentFeature = feature; 
            currentYear = alphaYear; 

            if (feature.properties.place === "") {
                place = "<div style='max-width: 300px; text-align: center;font-size:20px;'><b>" + feature.properties.county + ", " + feature.properties.state + "</b></div>"
            } else {
                place = "<div style='max-width: 300px; text-align: center;font-size:20px;'><b>" + feature.properties.place + " (" + feature.properties.county + ")</b></div>"
            }
            var tract = "<div style='text-align: center;font-size:20px;'><b>" + feature.properties.geoid10 + "</b></div>";
            var hriInterval = feature.properties.hri_int;
            if (hriInterval == 0) {
                hri = "<div style='text-align: center;'><b>N/A</b></div>"
            } else if (hriInterval == 1) {
                hri = "<div style='text-align: center;color:#008000'><b>A (" + feature.properties.hri_cont + ")</b></div>"
            } else if (hriInterval == 2) {
                hri = "<div style='text-align: center;color:#0000FF'><b>B (" + feature.properties.hri_cont + ")</b></div>"
            } else if (hriInterval == 3) {
                hri = "<div style='text-align: center;color:#C6BD00'><b>C (" + feature.properties.hri_cont + ")</b></div>"
            } else if (hriInterval == 4) {
                hri = "<div style='text-align: center;color:#FF0000'><b>D (" + feature.properties.hri_cont + ")</b></div>"
            }
            var cbsa = "<h3 style=text-align:center;font-size:20px;width:300px;>" + feature.properties.cbsa_name + "</h3>";
            var minhri =
                "<table style='width:90%;text-align:center'>" + 
                    "<tr>" + 
                        "<th style='width:50%;text-align:center'>Census Tract</th>" +
                        "<th style='width:50%;text-align:center'>HRI Score</th>" +
                    "</tr>" + 
                    "<tr style='font-size:20px;text-align:center'>" + 
                        "<th style='width:70%;text-align:center'>" + 
                            tract +
                        "</th>" +
                        "<th style='width:30%;text-align:center'>" + 
                            hri +
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

            myPopup.hriChartData = function hriChartData(selectedYear, feature) {
                if (!feature || !feature.properties) {
                    console.error("Feature or feature.properties is undefined", { selectedYear, feature });
                    return null;
                }

                let yearSuffix = String(selectedYear).slice(-2);
                let categories = ['A', 'B', 'C', 'D'];
                let values = [];
                let hasData = false;

                categories.forEach(category => {
                    let key = `hri${yearSuffix}${category.toLowerCase()}`;
                    if (feature.properties.hasOwnProperty(key)) {
                        let value = parseInt(feature.properties[key], 10) || 0;
                        if (value > 0) hasData = true;
                        values.push(value);
                    } else {
                        console.warn(`Property ${key} is missing in feature properties`);
                        values.push(0); // Push a default value if the property is missing
                    }
                });

                if (!hasData) return null; // Return null or similar flag if no data is available
                return [categories, ['Originations'].concat(values)]; // Ensure the first element is the series name
            }
              
            myPopup.pocChartData = function pocChartData(selectedYear, feature) {
                if (!feature || !feature.properties) {
                    console.error("Feature or feature.properties is undefined", { selectedYear, feature });
                    return null;
                }
            
                let yearSuffix = String(selectedYear).slice(-2);
                let categories = ['A', 'B', 'C']; // Use uppercase for display purposes
                let values = ['Originations']; // First element as the series name (optional)
            
                let hasData = false;
            
                categories.forEach(category => {
                    let key = `min${yearSuffix}${category.toLowerCase()}`; // Assuming keys are lowercase
                    if (feature.properties.hasOwnProperty(key)) {
                        let value = parseInt(feature.properties[key], 10) || 0;
                        if (value > 0) hasData = true;  // Flag to check if any valid data exists
                        values.push(value);
                    } else {
                        console.warn(`Property ${key} is missing in feature properties`);
                        values.push(0); // Push a default value if the property is missing
                    }
                });
            
                // Return null if no valid data is found, otherwise return the data
                return hasData ? [categories, values] : null;
            };
            
            var hriData = myPopup.hriChartData(alphaYear, feature);
            var pocData = myPopup.pocChartData(alphaYear, feature);
            
            uniqueId1 = 'origChart-' + Date.now(); 
            uniqueId2 = 'hriChart-' + Date.now();
            uniqueId3 = 'pocChart-' + Date.now();
            uniqueId4 = 'minpopChart-' + Date.now();

            var origPopup = `<div id="${uniqueId1}" style="width: 300px; height: 200px;"></div>`;
            var hriPopup;
                if (hriData === null) {
                    hriPopup = `<div id="${uniqueId2}" style="width: 300px; height: 150px; font-style: italic; text-align: center;">HRI data is not available for this metro area.</div>`;
                } else {
                    hriPopup = `<div id="${uniqueId2}" style="width: 300px; height: 150px;"></div>`; 
                }
            var pocPopup = `<div id="${uniqueId3}" style="width: 300px; height: 150px;"></div>`;
            var minpopPopup = `<div style='font-weight:bold;text-align:center;margin-top:10px;'>Minority Population</div><div id="${uniqueId4}" style="width:300px;height:50px;margin-bottom:50px;margin-top:-10px;"></div>`;

            // Create main tabs for the popup content
            var tabs = `
                <div class="tab">
                    <button class="tablinks active" onclick="openTab(event, 'TractStatistics')">Census Tract</button>
                    <button class="tablinks" onclick="openTab(event, 'AvgOriginations')">HRI (Area)</button>
                    <button class="tablinks" onclick="openTab(event, 'OriginationBreakdown')">POC (Area)</button>
                </div>
                <div id="TractStatistics" class="tabcontent" style="margin-bottom:-20px;">
                    ${place}
                    ${minhri}
                    ${origPopup}
                    ${minpopPopup}
                </div>
                <div id="AvgOriginations" class="tabcontent" style="display:none;">
                    ${cbsa}
                    <div style="font-style: italic; text-align: center; margin-top: -10px;">Average Originations by HRI Grade</div>
                    <div id="${uniqueId2}">
                        ${hriPopup}
                    </div>
                </div>
                <div id="OriginationBreakdown" class="tabcontent" style="display:none;">
                    ${cbsa}
                    <div style="font-style: italic; text-align: center; margin-top: -10px;">Origination Breakdown by People of Color</div>
                    <div id="${uniqueId3}">
                        ${pocPopup}
                    </div>
                </div>`;

            popup = new mapboxgl.Popup({ offset: popupOffsets, maxWidth: "350px" })
                .setLngLat(e.lngLat)
                .setHTML(tabs)
                .addTo(map);

            generateChart1([originationData[0], originationData[1], medianData], '#' + uniqueId1);
            generateMinpopChart('#' + uniqueId4, feature);
            updateChartForYear(currentYear, currentFeature);

            // Ensure tabs are ready before opening any
            waitForElement('TractStatistics', function() {
                openTab(null, 'TractStatistics');
            });
        }
    });
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    var selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.style.display = "block";
    } else {
        console.error(`Tab with name "${tabName}" not found.`);
    }

    if (evt) {
        evt.currentTarget.className += " active";
    } else {
        var button = document.querySelector(`button[onclick="openTab(event, '${tabName}')"]`);
        if (button) {
            button.className += " active";
        } else {
            console.error(`Button for tab "${tabName}" not found.`);
        }
    }

    if (tabName === 'AvgOriginations') {
        if (hriData !== null) {
            console.log(hriData);
            generateChart2(hriData, '#' + uniqueId2);
        }
    } else if (tabName === 'OriginationBreakdown') {
        // Only generate the chart if pocData is not null
        if (pocData !== null) {
            generateChart3(pocData, '#' + uniqueId3);
        }
    }
}

function waitForElement(id, callback) {
    var interval = setInterval(function() {
        if (document.getElementById(id)) {
            clearInterval(interval);
            callback();
        }
    }, 100); // Check every 100ms
}
