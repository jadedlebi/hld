function addMapLayers(map) {
    map.addLayer({
        id: "info-0",
        type: "fill",
        source: "info0",
        "source-layer": "hld_pop0-b79xrn",
        paint: {
          'fill-color': [
            'case',
            ['>=', ['get', 'minpop80'], 80], '#4C3B5A',
            ['>=', ['get', 'minpop80'], 50], '#9F95A7',
            'transparent' 
          ],
          "fill-outline-color": "transparent",
          "fill-opacity": 0.7
        }
      });
      map.addLayer({
        id: "info-1",
        type: "fill",
        source: "info1",
        "source-layer": "hld_pop1-dmbsdf",
        paint: {
          'fill-color': [
            'case',
            ['>=', ['get', 'minpop80'], 80], '#4C3B5A',
            ['>=', ['get', 'minpop80'], 50], '#9F95A7',
            'transparent' 
          ],
          "fill-outline-color": "transparent",
          "fill-opacity": 0.7
        }
      });
      map.addLayer({
        id: "info-2",
        type: "fill",
        source: "info2",
        "source-layer": "hld_pop2-3grch2",
        paint: {
          'fill-color': [
            'case',
            ['>=', ['get', 'minpop80'], 80], '#4C3B5A',
            ['>=', ['get', 'minpop80'], 50], '#9F95A7',
            'transparent' 
          ],
          "fill-outline-color": "transparent",
          "fill-opacity": 0.7
        }
      });
      map.addLayer({
        id: "info-31",
        type: "fill",
        source: "info31",
        "source-layer": "hld_pop31-4l1cdy",
        paint: {
          'fill-color': [
            'case',
            ['>=', ['get', 'minpop80'], 80], '#4C3B5A',
            ['>=', ['get', 'minpop80'], 50], '#9F95A7',
            'transparent' 
          ],
          "fill-outline-color": "transparent",
          "fill-opacity": 0.7
        }
      });
      map.addLayer({
        id: "info-32",
        type: "fill",
        source: "info32",
        "source-layer": "hld_pop32-1y395c",
        paint: {
          'fill-color': [
            'case',
            ['>=', ['get', 'minpop80'], 80], '#4C3B5A',
            ['>=', ['get', 'minpop80'], 50], '#9F95A7',
            'transparent' 
          ],
          "fill-outline-color": "transparent",
          "fill-opacity": 0.7
        }
      });
      map.addLayer({
        id: "info-33",
        type: "fill",
        source: "info33",
        "source-layer": "hld_pop33-8cthas",
        paint: {
          'fill-color': [
            'case',
            ['>=', ['get', 'minpop80'], 80], '#4C3B5A',
            ['>=', ['get', 'minpop80'], 50], '#9F95A7',
            'transparent' 
          ],
          "fill-outline-color": "transparent",
          "fill-opacity": 0.7
        }
      });
      map.addLayer({
        id: "info-4",
        type: "fill",
        source: "info4",
        "source-layer": "hld_pop4-8hvgo9",
        paint: {
          'fill-color': [
            'case',
            ['>=', ['get', 'minpop80'], 80], '#4C3B5A',
            ['>=', ['get', 'minpop80'], 50], '#9F95A7',
            'transparent' 
          ],
          "fill-outline-color": "transparent",
          "fill-opacity": 0.7
        }
      });
      map.addLayer({
        id: "hover-0",
        type: "fill",
        source: "hld-outline-0",
        "source-layer": "hld_0-4ii4n5",
        paint: {
          'fill-color': [
            'case',
            ['>=', ['get', 'minpop80'], 80], '#352344',
            ['>=', ['get', 'minpop80'], 50], '#635371',
            '#A7A7A7'
          ],
          "fill-opacity": 0.7
        }
      });
      map.addLayer({
        id: "hover-1",
        type: "fill",
        source: "hld-outline-1",
        "source-layer": "hld_1-4ku8cf",
        paint: {
          'fill-color': [
            'case',
            ['>=', ['get', 'minpop80'], 80], '#352344',
            ['>=', ['get', 'minpop80'], 50], '#635371',
            '#A7A7A7'
          ],
          "fill-opacity": 0.7
        }
      });
      map.addLayer({
        id: "hover-2",
        type: "fill",
        source: "hld-outline-2",
        "source-layer": "hld_2-9an09l",
        paint: {
          'fill-color': [
            'case',
            ['>=', ['get', 'minpop80'], 80], '#352344',
            ['>=', ['get', 'minpop80'], 50], '#635371',
            '#A7A7A7'
          ],
          "fill-opacity": 0.7
        }
      });
      map.addLayer({
        id: "hover-31",
        type: "fill",
        source: "hld-outline-31",
        "source-layer": "hld_31-dqnz7q",
        paint: {
          'fill-color': [
            'case',
            ['>=', ['get', 'minpop80'], 80], '#352344',
            ['>=', ['get', 'minpop80'], 50], '#635371',
            '#A7A7A7'
          ],
          "fill-opacity": 0.7
        }
      });
      map.addLayer({
        id: "hover-32",
        type: "fill",
        source: "hld-outline-32",
        "source-layer": "hld_32-7eoj13",
        paint: {
          'fill-color': [
            'case',
            ['>=', ['get', 'minpop80'], 80], '#352344',
            ['>=', ['get', 'minpop80'], 50], '#635371',
            '#A7A7A7'
          ],
          "fill-opacity": 0.7
        }
      });
      map.addLayer({
        id: "hover-33",
        type: "fill",
        source: "hld-outline-33",
        "source-layer": "hld_33-2bovy0",
        paint: {
          'fill-color': [
            'case',
            ['>=', ['get', 'minpop80'], 80], '#352344',
            ['>=', ['get', 'minpop80'], 50], '#635371',
            '#A7A7A7'
          ],
          "fill-opacity": 0.7
        }
      });
      map.addLayer({
        id: "hover-4",
        type: "fill",
        source: "hld-outline-4",
        "source-layer": "hld_4-7k4u16",
        paint: {
          'fill-color': [
            'case',
            ['>=', ['get', 'minpop80'], 80], '#352344',
            ['>=', ['get', 'minpop80'], 50], '#635371',
            '#A7A7A7'
          ],
          "fill-opacity": 0.7
        }
      });
      map.addLayer({
        id: "hover-line-0",
        type: "line",
        source: "hld-outline-0",
        "source-layer": "hld_0-4ii4n5",
        paint: {
          'line-color': [
            'case',
            ['>=', ['get', 'minpop80'], 80], '#1A0927',
            ['>=', ['get', 'minpop80'], 50], '#291539',
            '#7A7979'
          ],
          "line-width": 2
        }
      });
      map.addLayer({
        id: "hover-line-1",
        type: "line",
        source: "hld-outline-1",
        "source-layer": "hld_1-4ku8cf",
        paint: {
          'line-color': [
            'case',
            ['>=', ['get', 'minpop80'], 80], '#1A0927',
            ['>=', ['get', 'minpop80'], 50], '#291539',
            '#7A7979'
          ],
          "line-width": 2
        }
      });
      map.addLayer({
        id: "hover-line-2",
        type: "line",
        source: "hld-outline-2",
        "source-layer": "hld_2-9an09l",
        paint: {
          'line-color': [
            'case',
            ['>=', ['get', 'minpop80'], 80], '#1A0927',
            ['>=', ['get', 'minpop80'], 50], '#291539',
            '#7A7979'
          ],
          "line-width": 2
        }
      });
      map.addLayer({
        id: "hover-line-31",
        type: "line",
        source: "hld-outline-31",
        "source-layer": "hld_31-dqnz7q",
        paint: {
          'line-color': [
            'case',
            ['>=', ['get', 'minpop80'], 80], '#1A0927',
            ['>=', ['get', 'minpop80'], 50], '#291539',
            '#7A7979'
          ],
          "line-width": 2
        }
      });
      map.addLayer({
        id: "hover-line-32",
        type: "line",
        source: "hld-outline-32",
        "source-layer": "hld_32-7eoj13",
        paint: {
          'line-color': [
            'case',
            ['>=', ['get', 'minpop80'], 80], '#1A0927',
            ['>=', ['get', 'minpop80'], 50], '#291539',
            '#7A7979'
          ],
          "line-width": 2
        }
      });
      map.addLayer({
        id: "hover-line-33",
        type: "line",
        source: "hld-outline-33",
        "source-layer": "hld_33-2bovy0",
        paint: {
          'line-color': [
            'case',
            ['>=', ['get', 'minpop80'], 80], '#1A0927',
            ['>=', ['get', 'minpop80'], 50], '#291539',
            '#7A7979'
          ],
          "line-width": 2
        }
      });
      map.addLayer({
        id: "hover-line-4",
        type: "line",
        source: "hld-outline-4",
        "source-layer": "hld_4-7k4u16",
        paint: {
          'line-color': [
            'case',
            ['>=', ['get', 'minpop80'], 80], '#1A0927',
            ['>=', ['get', 'minpop80'], 50], '#291539',
            '#7A7979'
          ],
          "line-width": 2
        }
      });
      map.addLayer({
          id: 'hld-msa',
          type: 'circle',
          source: 'hld-cbsa',
          "source-layer": "hld_msa-7y4mg6",
          layout: {
              'visibility': 'visible' // default visible at low zoom levels
          },
          paint: {
              // Set initial circle size based on a default year, e.g., 1981
              'circle-radius': [
              'interpolate', ['linear'], ['get', 'orig_hu_81'],
              1, 2, // Small circle size for small loan values
              5, 20 // Larger circle size for larger loan values
              ],
              'circle-color': '#173B4A',
              'circle-opacity': 0.6, // Lower opacity for base circles
              'circle-stroke-width': 1, // Thin white stroke
              'circle-stroke-color': '#ffffff'
          }
          // Define other properties as needed
      });
      map.addLayer({
          id: 'hld-county',
          type: 'circle',
          source: 'hld-co',
          "source-layer": "hld_county-66ok1g",
          layout: {
              'visibility': 'none'
          },
          paint: {
              // Set initial circle size based on a default year, e.g., 1981
              'circle-radius': [
              'interpolate', ['linear'], ['get', 'orig_hu_81'],
              1, 2, // Small circle size for small loan values
              5, 20 // Larger circle size for larger loan values
              ],
              'circle-color': '#173B4A',
              'circle-opacity': 0.6, // Lower opacity for base circles
              'circle-stroke-width': 1, // Thin white stroke
              'circle-stroke-color': '#ffffff'
          }
          // Define other properties as needed
      });
      map.addLayer({
          id: 'hld-tract-0',
          type: 'circle',
          source: 'hld-0',
          "source-layer": "hld_circ_0-900zq3",
          layout: {
              'visibility': 'none'
          },
          paint: {
              // Set initial circle size based on a default year, e.g., 1981
              'circle-radius': [
              'interpolate', ['linear'], ['get', 'orig_hu_81'],
              1, 2, // Small circle size for small loan values
              15, 10 // Larger circle size for larger loan values
              ],
              'circle-color': '#007cbf',
              'circle-opacity': 0.6, // Lower opacity for base circles
              'circle-stroke-width': 1, // Thin white stroke
              'circle-stroke-color': '#ffffff'
          }
      });
      map.addLayer({
          id: 'hld-tract-1',
          type: 'circle',
          source: 'hld-1',
          "source-layer": "hld_circ_1-13z76t",
          layout: {
              'visibility': 'none'
          },
          paint: {
              // Set initial circle size based on a default year, e.g., 1981
              'circle-radius': [
              'interpolate', ['linear'], ['get', 'orig_hu_81'],
              1, 2, // Small circle size for small loan values
              15, 10 // Larger circle size for larger loan values
              ],
              'circle-color': '#173B4A',
              'circle-opacity': 0.6, // Lower opacity for base circles
              'circle-stroke-width': 1, // Thin white stroke
              'circle-stroke-color': '#ffffff'
          }
      });
      map.addLayer({
          id: 'hld-tract-2',
          type: 'circle',
          source: 'hld-2',
          "source-layer": "hld_circ_2-a6gbd9",
          layout: {
              'visibility': 'none'
          },
          paint: {
              // Set initial circle size based on a default year, e.g., 1981
              'circle-radius': [
              'interpolate', ['linear'], ['get', 'orig_hu_81'],
              1, 2, // Small circle size for small loan values
              15, 10 // Larger circle size for larger loan values
              ],
              'circle-color': '#173B4A',
              'circle-opacity': 0.6, // Lower opacity for base circles
              'circle-stroke-width': 1, // Thin white stroke
              'circle-stroke-color': '#ffffff'
          }
      });
      map.addLayer({
          id: 'hld-tract-3',
          type: 'circle',
          source: 'hld-3',
          "source-layer": "hld_circ_3-1hupsh",
          layout: {
              'visibility': 'none'
          },
          paint: {
              // Set initial circle size based on a default year, e.g., 1981
              'circle-radius': [
              'interpolate', ['linear'], ['get', 'orig_hu_81'],
              1, 2, // Small circle size for small loan values
              15, 10 // Larger circle size for larger loan values
              ],
              'circle-color': '#173B4A',
              'circle-opacity': 0.6, // Lower opacity for base circles
              'circle-stroke-width': 1, // Thin white stroke
              'circle-stroke-color': '#ffffff'
          }
      });
      map.addLayer({
          id: 'hld-tract-4',
          type: 'circle',
          source: 'hld-4',
          "source-layer": "hld_circ_4-57y94y",
          layout: {
              'visibility': 'none'
          },
          paint: {
              // Set initial circle size based on a default year, e.g., 1981
              'circle-radius': [
              'interpolate', ['linear'], ['get', 'orig_hu_81'],
              1, 2, // Small circle size for small loan values
              15, 10 // Larger circle size for larger loan values
              ],
              'circle-color': '#173B4A',
              'circle-opacity': 0.6, // Lower opacity for base circles
              'circle-stroke-width': 1, // Thin white stroke
              'circle-stroke-color': '#ffffff'
          }
      });
      map.addLayer({
        id: "holc-outline",
        type: "line",
        source: "holc-boundary",
        "source-layer": "holc-8hwxzf",
        paint: {
          'line-color': '#656464',
          'line-width': 2,
          'line-opacity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              3, 0, // At zoom level 3, opacity is 0.1
              5, 0.5, // At zoom level 5, opacity is 0.7
              20, 1 // At zoom level 20, opacity is 0
          ]
        },
        filter: ['!=', 'grade', ""]
      });
      map.addLayer({
        id: "holc-id",
        type: "fill",
        source: "holc",
        "source-layer": "holc_buffer-9hkx3y",
        paint: {
          'fill-pattern': [
            'case',
            ['==', ['get', 'grade'], 'A'], 'hatch-0', // Green for "A" '#008000'
            ['==', ['get', 'grade'], 'B'], 'hatch-1', // Blue for "B" '#0000FF'
            ['==', ['get', 'grade'], 'C'], 'hatch-2', // Yellow for "C" '#FFFF00'
            ['==', ['get', 'grade'], 'D'], 'hatch-3', // Red for "D" '#FF0000'
            '#000000' // Default color if none of the above values match (black in this case)
          ],
          "fill-outline-color": "transparent",
        },
        filter: ['!=', 'grade', ""]
      });
}
