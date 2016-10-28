/* jshint esversion:6 */

import React from 'react';
require('styles/TabPlaces.css');
import PlacesList from './PlacesListComponent';
import Map from './Map';
export default class TabPlaces extends React.Component {
    constructor(props) {
        super(props);
        this.state = { location: { lat: 52.375592, lng: 4.895803 } };
    }

    handleLocationUpdate(value) {
        console.log('changing location');// eslint-disable-line no-console
        this.setState({ location: value })
    }

    render() {
        console.log('location on render ',this.state.location);// eslint-disable-line no-console
        let status = this.props.status === 'opened' ? true : false;
        return (<div>We're {this.props.status} restaurants!
            <Map location={this.state.location} updateLocation={this.handleLocationUpdate}/>
            <PlacesList status={status} location={this.state.location}/>
        </div>);
    }
}
