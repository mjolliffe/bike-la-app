function initialize() {
  var mapProperties = {
    center: new google.maps.LatLng(34.079156, -118.251276),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.BICYCLING
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProperties);

  var marker=new google.maps.Marker({
    position:mapProperties.center,
  });
  marker.setMap(map);

  var bikeLayer = new google.maps.BicyclingLayer();
  bikeLayer.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

