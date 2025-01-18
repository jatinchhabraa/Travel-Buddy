// script.js
document
  .getElementById("start-planning")
  .addEventListener("click", function () {
    // Redirect to the trip planner page
    window.location.href = "trip-planner.html";
  });

let map;
let marker;

function initMap() {
  // Default location (New York City)
  const defaultLocation = { lat: 40.7128, lng: -74.006 };

  // Initialize map
  map = new google.maps.Map(document.getElementById("map"), {
    center: defaultLocation,
    zoom: 10,
  });

  // Add default marker
  marker = new google.maps.Marker({
    position: defaultLocation,
    map: map,
  });
}

document.getElementById("search-button").addEventListener("click", () => {
  const query = document.getElementById("search-box").value;

  // Use Geocoding API to get coordinates for the location
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: query }, (results, status) => {
    if (status === "OK") {
      const location = results[0].geometry.location;

      // Center map and add marker
      map.setCenter(location);
      marker.setPosition(location);

      // Optionally display location details
      alert(`Location: ${results[0].formatted_address}`);
    } else {
      alert("Location not found! Please try again.");
    }
  });
});
// let map;
// let autocomplete;

// function initMap() {
//   // Create the map centered on a default location
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -33.8688, lng: 151.2195 }, // Default to Sydney, Australia
//     zoom: 13,
//   });
//   const input = document.getElementById("pac-input");

//   // Create the autocomplete object and bind it to the input field
//   autocomplete = new google.maps.places.Autocomplete(input);
//   autocomplete.bindTo("bounds", map);

//   // Set up the event listener for when the user selects a place
//   autocomplete.addListener("place_changed", () => {
//     const place = autocomplete.getPlace();
//     if (!place.geometry) {
//       console.log("No details available for the input: '" + place.name + "'");
//       return;
//     }

//     if (place.geometry.viewport) {
//       map.fitBounds(place.geometry.viewport);
//     } else {
//       map.setCenter(place.geometry.location);
//       map.setZoom(17); // Zoom to 17 if the place has no viewport
//     }
//     // Place a marker on the selected location
//     new google.maps.Marker({
//       position: place.geometry.location,
//       map: map,
//     });
//   });
// }
