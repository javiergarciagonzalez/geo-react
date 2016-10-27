/* jshint esversion:6 */


import React from 'react';

require('styles//Map.css');


export default class PlacesComponent extends React.Component {
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
        let point = {};

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

     places () {
       return this.places.map(function(listValue) {
         return listValue;
       })
     }

    render() {
           let google = window.google && window.google.maps;

           if (!google) {
              console.error(// eslint-disable-line no-console
                'Google map api was not found in the page.');
              return;
            }
            let point = {};

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
        return <div>
          {this.places()}
        </div>;
    }
}
