'use strict';

module.directive('map', function() {
    return {
        restrict: 'E',
        replace: true,
        template: '<div></div>',
        link: function(scope, element, attrs) {
            //console.log(scope._spaces['features']);


            // -> Map Features
            var featureOpts = [
                {
                  stylers: [
                    { hue: '#02313c' },
                    { saturation: 55 },
                    { lightness: -20 },
                    { visibility: 'simplified' },
                    { gamma: 0.4 },
                    { weight: 0.5 }
                  ]
                },
                {
                  elementType: 'labels',
                  stylers: [
                    { visibility: 'on' }
                  ]
                },
                {
                  featureType: 'water',
                  stylers: [
                    { color: '#4dc6e4' }
                  ]
                }
            ];

            // -> set map options
            var mapOptions = {
                zoom: 13,
                center: new google.maps.LatLng(41.3966, 2.1846),
                disableDefaultUI: true,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'custom_style']
                },
                mapTypeId: 'custom_style'
            };

            // -> Create de map
            var map = new google.maps.Map(document.getElementById(attrs.id), mapOptions);
            
            // -> Apply Styles to map
            var styledMapOptions = {
                name: 'gooxStyle'
            };
            var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
            map.mapTypes.set('custom_style', customMapType);

            //-> Map Listeners
            google.maps.event.addListener(map, 'click', function(e) {
                scope.$apply(function() {
                    addMarker({
                    lat: e.latLng.lat(),
                    lng: e.latLng.lng()
                  }); 
                    
                    console.log(e);
                });
    
            }); // end click listener


            // -> Map Markers
            var addMarker = function(pos){
               var myLatlng = new google.maps.LatLng(pos.lat,pos.lng);
               var marker = new google.maps.Marker({
                    position: myLatlng, 
                    map: map,
                    title:"Hello World!"
                });
            } //end addMarker
            
        }
    };
});