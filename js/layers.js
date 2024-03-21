function addMapLayers(map) {
  
  // CBSA AND COUNTY BASE LAYERS
  map.addLayer({
    id: 'msa',
    type: 'fill',
    source: 'hld-cbsa2',
    "source-layer": "hld_msa-98zg9y",
    paint: {
      'fill-color': 'transparent',
      "fill-outline-color": "transparent"
    }
  });
  map.addLayer({
    id: 'county',
    type: 'fill',
    source: 'hld-co2',
    "source-layer": "hld_county-bkfzzr",
    layout: {
        'visibility': 'none'
    },
    paint: {
      'fill-color': 'transparent',
      "fill-outline-color": "transparent"
    }
  });

  // TRACT POLYGON LAYERS
  map.addLayer({
    id: "info-0",
    type: "fill",
    source: "hld-0",
    "source-layer": "nhld0-8b5aw9",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#4C3B5A',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#9F95A7',
        'transparent' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "info-11",
    type: "fill",
    source: "hld-11",
    "source-layer": "nhld11-agntxi",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#4C3B5A',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#9F95A7',
        'transparent' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "info-12",
    type: "fill",
    source: "hld-12",
    "source-layer": "nhld12-78iwm3",
     layout: {
      'visibility': 'none'
    },
    layout: {
      'visibility': 'none'
    },
   paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#4C3B5A',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#9F95A7',
        'transparent' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "info-13",
    type: "fill",
    source: "hld-13",
    "source-layer": "nhld13-dt1os5",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#4C3B5A',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#9F95A7',
        'transparent' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "info-14",
    type: "fill",
    source: "hld-14",
    "source-layer": "nhld14-0nkx3n",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#4C3B5A',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#9F95A7',
        'transparent' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "info-21",
    type: "fill",
    source: "hld-21",
    "source-layer": "nhld21-8uim2p",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#4C3B5A',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#9F95A7',
        'transparent' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "info-22",
    type: "fill",
    source: "hld-22",
    "source-layer": "nhld22-7mmhqo",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#4C3B5A',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#9F95A7',
        'transparent' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "info-23",
    type: "fill",
    source: "hld-23",
    "source-layer": "nhld23-5rsazl",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#4C3B5A',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#9F95A7',
        'transparent' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "info-24",
    type: "fill",
    source: "hld-24",
    "source-layer": "nhld24-cy98vp",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#4C3B5A',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#9F95A7',
        'transparent' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "info-31",
    type: "fill",
    source: "hld-31",
    "source-layer": "nhld31-049jow",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#4C3B5A',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#9F95A7',
        'transparent' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "info-32",
    type: "fill",
    source: "hld-32",
    "source-layer": "nhld32-3vuys8",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#4C3B5A',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#9F95A7',
        'transparent' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "info-33",
    type: "fill",
    source: "hld-33",
    "source-layer": "nhld33-9q3i8p",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#4C3B5A',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#9F95A7',
        'transparent' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "info-34",
    type: "fill",
    source: "hld-34",
    "source-layer": "nhld34-246mz0",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#4C3B5A',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#9F95A7',
        'transparent' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "info-41",
    type: "fill",
    source: "hld-41",
    "source-layer": "nhld41-6e2jld",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#4C3B5A',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#9F95A7',
        'transparent' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "info-42",
    type: "fill",
    source: "hld-42",
    "source-layer": "nhld42-ccri1i",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#4C3B5A',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#9F95A7',
        'transparent' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "info-43",
    type: "fill",
    source: "hld-43",
    "source-layer": "nhld43-bn4v0l",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#4C3B5A',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#9F95A7',
        'transparent' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "info-44",
    type: "fill",
    source: "hld-44",
    "source-layer": "nhld44-6nalar",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#4C3B5A',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#9F95A7',
        'transparent' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });

  // HOVER FILL LAYERS
  map.addLayer({
    id: "hover-0",
    type: "fill",
    source: "hld-0",
    "source-layer": "nhld0-8b5aw9",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#352344',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#635371',
        '#A7A7A7' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "hover-11",
    type: "fill",
    source: "hld-11",
    "source-layer": "nhld11-agntxi",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#352344',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#635371',
        '#A7A7A7' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "hover-12",
    type: "fill",
    source: "hld-12",
    "source-layer": "nhld12-78iwm3",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#352344',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#635371',
        '#A7A7A7' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "hover-13",
    type: "fill",
    source: "hld-13",
    "source-layer": "nhld13-dt1os5",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#352344',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#635371',
        '#A7A7A7' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "hover-14",
    type: "fill",
    source: "hld-14",
    "source-layer": "nhld14-0nkx3n",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#352344',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#635371',
        '#A7A7A7' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "hover-21",
    type: "fill",
    source: "hld-21",
    "source-layer": "nhld21-8uim2p",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#352344',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#635371',
        '#A7A7A7' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "hover-22",
    type: "fill",
    source: "hld-22",
    "source-layer": "nhld22-7mmhqo",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#352344',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#635371',
        '#A7A7A7' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "hover-23",
    type: "fill",
    source: "hld-23",
    "source-layer": "nhld23-5rsazl",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#352344',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#635371',
        '#A7A7A7' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "hover-24",
    type: "fill",
    source: "hld-24",
    "source-layer": "nhld24-cy98vp",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#352344',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#635371',
        '#A7A7A7' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "hover-31",
    type: "fill",
    source: "hld-31",
    "source-layer": "nhld31-049jow",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#352344',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#635371',
        '#A7A7A7' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "hover-32",
    type: "fill",
    source: "hld-32",
    "source-layer": "nhld32-3vuys8",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#352344',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#635371',
        '#A7A7A7' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "hover-33",
    type: "fill",
    source: "hld-33",
    "source-layer": "nhld33-9q3i8p",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#352344',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#635371',
        '#A7A7A7' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "hover-34",
    type: "fill",
    source: "hld-34",
    "source-layer": "nhld34-246mz0",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#352344',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#635371',
        '#A7A7A7' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "hover-41",
    type: "fill",
    source: "hld-41",
    "source-layer": "nhld41-6e2jld",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#352344',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#635371',
        '#A7A7A7' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "hover-42",
    type: "fill",
    source: "hld-42",
    "source-layer": "nhld42-ccri1i",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#352344',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#635371',
        '#A7A7A7' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "hover-43",
    type: "fill",
    source: "hld-43",
    "source-layer": "nhld43-bn4v0l",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#352344',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#635371',
        '#A7A7A7' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: "hover-44",
    type: "fill",
    source: "hld-44",
    "source-layer": "nhld44-6nalar",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#352344',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#635371',
        '#A7A7A7' 
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });
  map.addLayer({
    id: 'msa-hover',
    type: 'fill',
    source: 'hld-cbsa2',
    "source-layer": "hld_msa-98zg9y",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'fill-color': '#7A7979',
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    },
  });
  map.addLayer({
    id: 'county-hover',
    type: 'fill',
    source: 'hld-co2',
    "source-layer": "hld_county-bkfzzr",
    layout: {
        'visibility': 'none'
    },
    paint: {
      'fill-color': '#7A7979',
      "fill-outline-color": "transparent",
      "fill-opacity": 0.7
    }
  });

  // HOVER LINE LAYERS
  map.addLayer({
    id: "hover-line-0",
    type: "line",
    source: "hld-0",
    "source-layer": "nhld0-8b5aw9",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'line-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#1A0927',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#291539',
        '#7A7979' 
      ],
      "line-width": 2
    }
  });
  map.addLayer({
    id: "hover-line-11",
    type: "line",
    source: "hld-11",
    "source-layer": "nhld11-agntxi",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'line-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#1A0927',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#291539',
        '#7A7979' 
      ],
      "line-width": 2
    }
  });
  map.addLayer({
    id: "hover-line-12",
    type: "line",
    source: "hld-12",
    "source-layer": "nhld12-78iwm3",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'line-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#1A0927',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#291539',
        '#7A7979' 
      ],
      "line-width": 2
    }
  });
  map.addLayer({
    id: "hover-line-13",
    type: "line",
    source: "hld-13",
    "source-layer": "nhld13-dt1os5",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'line-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#1A0927',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#291539',
        '#7A7979' 
      ],
      "line-width": 2
    }
  });
  map.addLayer({
    id: "hover-line-14",
    type: "line",
    source: "hld-14",
    "source-layer": "nhld14-0nkx3n",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'line-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#1A0927',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#291539',
        '#7A7979' 
      ],
      "line-width": 2
    }
  });
  map.addLayer({
    id: "hover-line-21",
    type: "line",
    source: "hld-21",
    "source-layer": "nhld21-8uim2p",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'line-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#1A0927',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#291539',
        '#7A7979' 
      ],
      "line-width": 2
    }
  });
  map.addLayer({
    id: "hover-line-22",
    type: "line",
    source: "hld-22",
    "source-layer": "nhld22-7mmhqo",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'line-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#1A0927',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#291539',
        '#7A7979' 
      ],
      "line-width": 2
    }
  });
  map.addLayer({
    id: "hover-line-23",
    type: "line",
    source: "hld-23",
    "source-layer": "nhld23-5rsazl",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'line-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#1A0927',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#291539',
        '#7A7979' 
      ],
      "line-width": 2
    }
  });
  map.addLayer({
    id: "hover-line-24",
    type: "line",
    source: "hld-24",
    "source-layer": "nhld24-cy98vp",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'line-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#1A0927',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#291539',
        '#7A7979' 
      ],
      "line-width": 2
    }
  });
  map.addLayer({
    id: "hover-line-31",
    type: "line",
    source: "hld-31",
    "source-layer": "nhld31-049jow",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'line-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#1A0927',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#291539',
        '#7A7979' 
      ],
      "line-width": 2
    }
  });
  map.addLayer({
    id: "hover-line-32",
    type: "line",
    source: "hld-32",
    "source-layer": "nhld32-3vuys8",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'line-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#1A0927',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#291539',
        '#7A7979' 
      ],
      "line-width": 2
    }
  });
  map.addLayer({
    id: "hover-line-33",
    type: "line",
    source: "hld-33",
    "source-layer": "nhld33-9q3i8p",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'line-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#1A0927',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#291539',
        '#7A7979' 
      ],
      "line-width": 2
    }
  });
  map.addLayer({
    id: "hover-line-34",
    type: "line",
    source: "hld-34",
    "source-layer": "nhld34-246mz0",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'line-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#1A0927',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#291539',
        '#7A7979' 
      ],
      "line-width": 2
    }
  });
  map.addLayer({
    id: "hover-line-41",
    type: "line",
    source: "hld-41",
    "source-layer": "nhld41-6e2jld",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'line-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#1A0927',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#291539',
        '#7A7979' 
      ],
      "line-width": 2
    }
  });
  map.addLayer({
    id: "hover-line-42",
    type: "line",
    source: "hld-42",
    "source-layer": "nhld42-ccri1i",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'line-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#1A0927',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#291539',
        '#7A7979' 
      ],
      "line-width": 2
    }
  });
  map.addLayer({
    id: "hover-line-43",
    type: "line",
    source: "hld-43",
    "source-layer": "nhld43-bn4v0l",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'line-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#1A0927',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#291539',
        '#7A7979' 
      ],
      "line-width": 2
    }
  });
  map.addLayer({
    id: "hover-line-44",
    type: "line",
    source: "hld-44",
    "source-layer": "nhld44-6nalar",
    layout: {
      'visibility': 'none'
    },
    paint: {
      'line-color': [
        'case',
        ['>=', ['to-number', ['get', 'minpop80']], 80], '#1A0927',
        ['>=', ['to-number', ['get', 'minpop80']], 50], '#291539',
        '#7A7979' 
      ],
      "line-width": 2
    }
  });
  map.addLayer({
    id: 'msa-hover-line',
    type: 'line',
    source: 'hld-cbsa2',
    "source-layer": "hld_msa-98zg9y",
    layout: {
        'visibility': 'none' // default visible at low zoom levels
    },
    paint: {
      'line-color': '#7A7979',
      "line-width": 2
    }
  });
  map.addLayer({
    id: 'county-hover-line',
    type: 'line',
    source: 'hld-co2',
    "source-layer": "hld_county-bkfzzr",
    layout: {
        'visibility': 'none' // default visible at low zoom levels
    },
    paint: {
      'line-color': '#7A7979',
      "line-width": 2
    }
  });

  // CBSA-STATE CIRCLE LAYER
  map.addLayer({
      id: 'msa-circle',
      type: 'circle',
      source: 'hld-cbsa1',
      "source-layer": "hld_msa2_dot-1zpnmz",
      layout: {
          'visibility': 'visible'
      },
      paint: {
          'circle-radius': [
            'interpolate', ['linear'], ['to-number', ['get', 'orig_81']],
            0, 0,
            1000, 5, 
            40000, 30
            ],
          'circle-color': '#173B4A',
          'circle-opacity': 0.6, // Lower opacity for base circles
          'circle-stroke-width': 1, // Thin white stroke
          'circle-stroke-color': '#ffffff'
      }
  });

  // COUNTY CIRCLE LAYER
  map.addLayer({
      id: 'county-circle',
      type: 'circle',
      source: 'hld-co1',
      "source-layer": "hld_county_dot-cifok7",
      layout: {
          'visibility': 'none'
      },
      paint: {
          'circle-radius': [
            'interpolate', ['linear'], ['to-number', ['get', 'orig_81']],
            0, 0,
            1000, 2, 
            10000, 20 
            ],
          'circle-color': '#173B4A',
          'circle-opacity': 0.6, // Lower opacity for base circles
          'circle-stroke-width': 1, // Thin white stroke
          'circle-stroke-color': '#ffffff'
      }
  });

  // TRACT CIRCLE LAYERS
  map.addLayer({
      id: 'circ-0',
      type: 'circle',
      source: 'hld-c0',
      "source-layer": "hcirc0-d7yemb",
      layout: {
          'visibility': 'none'
      },
      paint: {
          // Set initial circle size based on a default year, e.g., 1981
          'circle-radius': [
          'interpolate', ['linear'], ['get', 'circ_81'],
          0, 0,
          1, 5, 
          10, 30
          ],
          'circle-color': '#007cbf',
          'circle-opacity': 0.6, // Lower opacity for base circles
          'circle-stroke-width': [
            'case',
            ['==', ['get', 'orig_81'], 0], 0,
            1
           ],
          'circle-stroke-color': '#ffffff'
      }
  });
  map.addLayer({
      id: 'circ-1',
      type: 'circle',
      source: 'hld-c1',
      "source-layer": "hcirc1-787wbc",
      layout: {
          'visibility': 'none'
      },
      paint: {
          // Set initial circle size based on a default year, e.g., 1981
          'circle-radius': [
            'interpolate', ['linear'], ['get', 'circ_81'],
            0, 0,
            1, 5, 
            10, 30
            ],
          'circle-color': '#173B4A',
          'circle-opacity': 0.6, // Lower opacity for base circles
          'circle-stroke-width': [
            'case',
            ['==', ['get', 'orig_81'], 0], 0,
            1
           ],
          'circle-stroke-color': '#ffffff'
      }
  });
  map.addLayer({
      id: 'circ-2',
      type: 'circle',
      source: 'hld-c2',
      "source-layer": "hcirc2-b4ichd",
      layout: {
          'visibility': 'none'
      },
      paint: {
          // Set initial circle size based on a default year, e.g., 1981
          'circle-radius': [
            'interpolate', ['linear'], ['get', 'circ_81'],
            0, 0,
            1, 5, 
            10, 30
            ],
          'circle-color': '#173B4A',
          'circle-opacity': 0.6, // Lower opacity for base circles
          'circle-stroke-width': [
            'case',
            ['==', ['get', 'orig_81'], 0], 0,
            1
           ],
          'circle-stroke-color': '#ffffff'
      }
  });
  map.addLayer({
    id: 'circ-31',
    type: 'circle',
    source: 'hld-c31',
    "source-layer": "hcirc31-8vw5oz",
    layout: {
        'visibility': 'none'
    },
    paint: {
        // Set initial circle size based on a default year, e.g., 1981
        'circle-radius': [
        'interpolate', ['linear'], ['get', 'circ_81'],
        0, 0,
        1, 5, 
        10, 30
        ],
        'circle-color': '#173B4A',
        'circle-opacity': 0.6, // Lower opacity for base circles
        'circle-stroke-width': [
          'case',
          ['==', ['get', 'orig_81'], 0], 0,
          1
         ],
      'circle-stroke-color': '#ffffff'
    }
  });
  map.addLayer({
    id: 'circ-32',
    type: 'circle',
    source: 'hld-c32',
    "source-layer": "hcirc32-dvk2ae",
    layout: {
        'visibility': 'none'
    },
    paint: {
        // Set initial circle size based on a default year, e.g., 1981
        'circle-radius': [
        'interpolate', ['linear'], ['get', 'circ_81'],
        0, 0,
        1, 5, 
        10, 30
        ],
        'circle-color': '#173B4A',
        'circle-opacity': 0.6, // Lower opacity for base circles
        'circle-stroke-width': [
          'case',
          ['==', ['get', 'orig_81'], 0], 0,
          1
         ],
      'circle-stroke-color': '#ffffff'
    }
  });
  map.addLayer({
    id: 'circ-33',
    type: 'circle',
    source: 'hld-c33',
    "source-layer": "hcirc33-3d29sm",
    layout: {
        'visibility': 'none'
    },
    paint: {
        // Set initial circle size based on a default year, e.g., 1981
        'circle-radius': [
        'interpolate', ['linear'], ['get', 'circ_81'],
        0, 0,
        1, 5, 
        10, 30
        ],
        'circle-color': '#173B4A',
        'circle-opacity': 0.6, // Lower opacity for base circles
        'circle-stroke-width': [
          'case',
          ['==', ['get', 'orig_81'], 0], 0,
          1
         ],
      'circle-stroke-color': '#ffffff'
    }
  });
  map.addLayer({
    id: 'circ-4',
    type: 'circle',
    source: 'hld-c4',
    "source-layer": "hcirc4-6wj8zb",
    layout: {
        'visibility': 'none'
    },
    paint: {
        // Set initial circle size based on a default year, e.g., 1981
        'circle-radius': [
        'interpolate', ['linear'], ['get', 'circ_81'],
        0, 0,
        1, 5, 
        10, 30
        ],
        'circle-color': '#173B4A',
        'circle-opacity': 0.6, // Lower opacity for base circles
        'circle-stroke-width': [
          'case',
          ['==', ['get', 'orig_81'], 0], 0,
          1
         ],
      'circle-stroke-color': '#ffffff'
    }
  });

  // HOLC LAYERS
  map.addLayer({
    id: "holc-outline",
    type: "line",
    source: "holc-boundary",
    "source-layer": "holc_outline-9mf7oi",
    paint: {
      'line-color': '#656464',
      'line-width': 2.5,
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
    "source-layer": "holc_buffer-0bz1df",
    paint: {
      'fill-color': [
        'case',
        ['==', ['get', 'grade'], 'A'], '#008000', // Green for "A" '#008000'
        ['==', ['get', 'grade'], 'B'], '#0000FF', // Blue for "B" '#0000FF'
        ['==', ['get', 'grade'], 'C'], '#FFFF00', // Yellow for "C" '#FFFF00'
        ['==', ['get', 'grade'], 'D'], '#FF0000', // Red for "D" '#FF0000'
        '#000000' // Default color if none of the above values match (black in this case)
      ],
      "fill-outline-color": "transparent",
      "fill-opacity": 0.4
    },
    filter: ['!=', 'grade', ""]
  });
}
