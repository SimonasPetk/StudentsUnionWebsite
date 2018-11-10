// Initialize and add the map
function initMap() {
    // The location of Sheffield Student's union
    var studentsUnion = {lat: 53.38072, lng: -1.4871329999999716};
    // The map, centered at Sheffield Student's union
    var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 17, center: studentsUnion});

    //add text and info about SU later google maps info window

    // The marker, positioned at Sheffield Student's union
    var marker = new google.maps.Marker({position: studentsUnion, map: map});
}