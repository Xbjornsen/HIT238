  var chargeStations = [
    {lat: -12.374604, lng:  130.869585},
    {lat: -12.440389, lng:  130.839916},
    {lat: -12.455033, lng:  130.836709},
  ];

  var markers = [];
  var map;

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: {lat: -12.37, lng: 130.87}
    });
  }


for (var i = 0; i < chargeStations.length; i++) {
  addMarkerWithTimeout(chargeStations[i], i * 200);
}


  function addMarkerWithTimeout(position, timeout) {
    window.setTimeout(function() {
      markers.push(new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.DROP
      }));
    }, timeout);
  }

  function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  }