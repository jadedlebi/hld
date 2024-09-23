var map;

function initializeMap() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiamVkbGViaSIsImEiOiJjanhhc3M4NnYwMmxsM3lyODlxYTFhOGRxIn0.746AmyW45uwRPeUy1PczOg';
  
  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jedlebi/cltg2vre600wz01p02c3jf3h3', 
    projection: {
        name: 'mercator'
    },
    center: [-96, 37.8],
    zoom: 4,
    minZoom: 4,
    maxZoom: 20
  });

  // Add a search bar to the map.
  map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
  }));

  // Add in option for full-screen.
  map.addControl(new mapboxgl.FullscreenControl());

  // Add geolocate control to the map.
  map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true
  }));

  // Add zoom and rotation controls to the map.
  map.addControl(new mapboxgl.NavigationControl());

}

initializeMap();
