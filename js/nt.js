//js to drop markers at the charging station locations< i tried to add charging icons instead of red markers but something seems to be wrong as it doesn't do it. 

  var image = 'https://github.com/Xbjornsen/HIT238_Charge4Lyfe/blob/master/image/7.png';
  var map;
  var mark;
  function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: {lat: -12.37, lng: 130.87}
    });
    
      var chargeStations = [
                            {lat: -12.374604, lng:  130.869585},
                            {lat: -12.440389, lng:  130.839916},
                            {lat: -12.455033, lng:  130.836709},
  ];
    
      
      for (var i = 0; i<chargeStations.length; i++){
      mark = new google.maps.Marker({
         position : chargeStations[i],
          map: map,
          icon: image,
          animation: google.maps.Animation.DROP,
         title: "Electric Charge station"
     });
  }
  var marker = null;
navigator.geolocation.getCurrentPosition(
  function(position) {
    marker = 
    addMarker(position.coords.latitude, position.coords.longitude);
    }
  );
  navigator.geolocation.watchPosition(
  function(position) {
    moveMarker(
      marker,
      position.coords.latitude, 
      position.coords.longitude);
    }
  );
}
function addMarker(lat, lng) {
  var marker = new google.maps.Marker({position: {lat: lat, lng: lng}, map: map,
                                       draggable: true,
                                       title:"Your Location"
    });
  return marker;
}


function moveMarker(marker, lat, lng) {
  marker.setPosition({lat: lat, lng: lng});
  return marker;
}


mark.setMap(map);

'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjuhumC_J3dAhUOdt4KHSQtAUIQjRx6BAgBEAU&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F202593%2Fcar_charge_charging_station_icon&psig=AOvVaw3dgRftD6fAdAypNnHS2xBF&ust=1536034038249305'
