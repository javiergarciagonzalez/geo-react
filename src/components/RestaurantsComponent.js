/* jshint esversion:6 */

import React from 'react';
require('styles/Restaurants.css');
import RestaurantList from './RestaurantListComponent';
import Map from './Map';
export default class Restaurants extends React.Component {
    constructor(props) {
        super(props);
        this.state = { location: { lat: 52.375592, lng: 4.895803 } };
    }

    handleLocationUpdate(value) {
        console.log('changing location');
        this.setState({ location: value })
    }

    render() {
        console.log('location on render ',this.state.location);
        let status = this.props.status === 'opened' ? true : false;
        return (<div>We're {this.props.status} restaurants!
            <Map location={this.state.location} updateLocation={this.handleLocationUpdate}/>
            <RestaurantList status={status} location={this.state.location}/>
        </div>);
    }
}
