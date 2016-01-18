function initialize() {
  var mapProperties = {
    center: new google.maps.LatLng(-34.397, 150.644),
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProperties);

  var marker=new google.maps.Marker({
    position:mapProperties.center,
  });
  marker.setMap(map);

}

google.maps.event.addDomListener(window, 'load', initialize);

