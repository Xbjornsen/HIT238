//js to drop markers at the charging station locations, Something is wrong with the code, sometimes it only drops two markers, i got some of the code from https://developers.google.com/maps/documentation/javascript/examples/icon-simple

var map;
function initMap() {
  map = new google.maps.Map(
    document.getElementById('map'),
    {
      center: {
        lat: -19.258965,
        lng: 146.816956
      },
      zoom: 12
     }
  );
}