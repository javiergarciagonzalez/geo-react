/* jshint esversion:6 */

import React from 'react';
require('styles/TabPlaces.css');
import PlacesList from './PlacesListComponent';
import Map from './Map';
export default class TabPlaces extends React.Component {
    constructor(props) {
        super(props);
        this.state = { location: { lat: 52.375592, lng: 4.895803 }, type: 'cafe' };
        this.handleMapClick = this.handleMapClick.bind(this);
    }

    handleMapClick(location) {
        this.setState({ location });
    }

    render() {
        let status = this.props.status === 'opened' ? true : false;
        return (<div>We're {this.props.status} {this.props.type}s!
            <Map location={this.state.location} onClick={this.handleMapClick}/>
            <PlacesList status={status} location={this.state.location} type={this.props.type} />
        </div>);
    }
}
