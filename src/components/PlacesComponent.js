/* jshint esversion:6 */


import React from 'react';

require('styles//Map.css');


export default class PlacesComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
            return <li>{this.props.name}</li>;
    }
}
