/* jshint esversion:6 */
import React from 'react';
import initMap from './../model/mapModel';
require('styles/Map.css');

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        initMap(props);
    }


    handleLocationChange() {
        var value = this.props.location;
        this.props.updateLocation(value);
    }

    getMapLocation() {
        return this.props.location;
    }

     render() {
         return <div onChange={this.handleLocationChange}>{this.props.location.lat}</div>;
     }
}
