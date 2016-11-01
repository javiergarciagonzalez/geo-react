/* jshint esversion:6 */

import React from 'react';
require('styles/TabPlaces.css');
import PlacesList from './PlacesListComponent';
import initMap from './../model/mapModel';
require('styles/Map.css');


export default class TabPlaces extends React.Component {
    constructor(props) {
        super(props);
        initMap(props);
    }

    render() {
        let status = this.props.status === 'opened' ? true : false;
        return (<div>We're {this.props.status} {this.props.type}s!
            <PlacesList status={status} location={this.props.location} type={this.props.type} />
        </div>);
    }
}
