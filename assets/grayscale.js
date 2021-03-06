(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  
  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

})(jQuery); // End of use strict



if($('#osm-map').length) {
  // Where you want to render the map.
  var element = document.getElementById('osm-map');

  // Height has to be set. You can do this in CSS too.
  element.style = 'height:300px;';

  // Create Leaflet map on map element.
  var map = L.map(element);

  // Add OSM tile leayer to the Leaflet map.
  L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '<a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Target's GPS coordinates.
  var target = L.latLng($('#osm-map').attr('data-lat'), $('#osm-map').attr('data-long'));
  var zoom = $('#osm-map').attr('data-zoom');

  // Set map's center to target
  map.setView(target, zoom);

  map.scrollWheelZoom.disable();

  // Place a marker on the same location.
  L.marker(target).addTo(map);
}
