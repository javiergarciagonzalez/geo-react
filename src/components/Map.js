/* jshint esversion:6 */
import React from 'react';
// import MapModel from './../model/mapModel';
require('styles/Map.css');

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.initMap();
        // this.mapModel = new MapModel();
    }


    handleLocationChange() {
        var value = this.props.location;
        this.props.updateLocation(value);
    }

    getMapLocation() {
        return this.props.location;
    }

    initMap() {

        if (this.props && this.props.location) {

            var map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 16,
                center: this.props.location
            });

            var marker = new window.google.maps.Marker({
                position: this.props.location,
                map: map
            });

            map.addListener('click', (e) => {
                console.log('click on map!');// eslint-disable-line no-console

                var position = {
                    lat: e.latLng.lat(),
                    lng: e.latLng.lng()
                };

                marker.setPosition(position);
                console.log('position setted');// eslint-disable-line no-console
                map.panTo(new window.google.maps.LatLng(position.lat, position.lng));

                this.props.onClick(position);
            });
        }

     }

     render() {
         return <div onChange={this.handleLocationChange}>{this.props.location.lat}</div>;
     }
}
