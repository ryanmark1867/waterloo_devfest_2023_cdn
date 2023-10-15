// Get the province dropdown and map elements.
const provinceDropdown = document.querySelector('#province');
const map = document.querySelector('#map');

// Create a Leaflet map.
const leafletMap = L.map(map);

// Add a basemap to the map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(leafletMap);

// Add a listener to the province dropdown to update the map when a province is selected.
provinceDropdown.addEventListener('change', () => {
  const province = provinceDropdown.value;

  // Zoom in to the selected province.
  leafletMap.setView([54.5, -106], 5);

  // Add a marker to the selected province.
  L.marker([54.5, -106]).addTo(leafletMap);
});

// Zoom in to Canada by default.
leafletMap.setView([56.1, -106.4], 4);
