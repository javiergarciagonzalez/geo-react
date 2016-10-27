/* jshint esversion:6 */


import React from 'react';
import Places from 'PlacesComponent';
require('styles//Map.css');


export default class MapComponent extends React.Component {
    constructor(props) {
        super(props);
     }

     init() {
       console.log('INIT!!!!');
       let google = window.google && window.google.maps;

       if (!google) {
          console.error(// eslint-disable-line no-console
            'Google map api was not found in the page.');
          return;
        }

        // this.google = google;

        let point = {};
        // if (nagivator.geolocation) {
        //   console.log('navigator');
        //   navigator.geolocation.getCurrentPosition(function(position) {
        //     console.log(position.coords.latitude, position.coords.longitude);
        //     point = {
        //       lat: position.coords.latitude,
        //       lng: position.coords.longitude
        //     };
        //   });
        // }
        point = {
          lat: 52.375592,
          lng: 4.895803
        };

        var request = {
           location: point,
           radius: '500',
           types: ['restaurants']
         };

        var map = document.getElementById('map');

        var service = new window.google.maps.places.PlacesService(map);

        service.nearbySearch(request, (log) => {
          console.log(log, 'loguito');
          this.setPlaces(log);
        });
     }

     setPlaces(log) {
       console.log('entra en setPlaces', log, '1');
         this.places = log;
        console.log(this.places);
     }



    render() {
        // this.init();
        // console.log(this.places, 'placesprimos');
        return <ul>
                <Places/>
        </ul>;
    }
}