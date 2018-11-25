/*  code for map is used from: https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple-max
	The code is sligthly edited to fit our needs.
	It is licensed over Apache License 2.0 (https://www.apache.org/licenses/LICENSE-2.0)*/

/* Initialize and add the map */
function initMap() {
    // The location of Sheffield Student's union
    var studentsUnion = {lat: 53.38072, lng: -1.4871329999999716};
    // The map, centered at Sheffield Student's union
    var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 17, center: studentsUnion});

    //Picture added to SU google maps info window
    var contentString = 
            '<h1>Sheffield Student\'s Union</h1>'+
            '<img src = "images/sumap.png">';

    // create info window
    var infowindow = new google.maps.InfoWindow({
    	content: contentString,
    	maxWidth: 350,
    	minWidth: 300
    });

    // The marker, positioned at Sheffield Student's union
    var marker = new google.maps.Marker({position: studentsUnion, map: map, title: 'Sheffield Student\'s Union'});

    // display SU InfoWindow when clicked
    marker.addListener('click', function() {
    	infowindow.open(map,marker);
    });

}