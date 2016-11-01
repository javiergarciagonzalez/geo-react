/* jshint esversion:6 */
import React from 'react';
import initMap from './../model/mapModel';
require('styles/Map.css');

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        initMap(props);
    }

    getMapLocation() {
        return this.props.location;
    }

     render() {
         return <div>{this.props.location.lat}</div>;
     }
}
