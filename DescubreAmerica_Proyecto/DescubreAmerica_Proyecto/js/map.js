function initMap() {
  var costaRica = {lat: 9.7489, lng: -83.7534};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: costaRica
  });
  var marker = new google.maps.Marker({
    position: costaRica,
    map: map
  });
}