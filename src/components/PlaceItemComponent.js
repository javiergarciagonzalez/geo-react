/* jshint esversion:6 */


import React from 'react';

require('styles/PlacesList.css');


export default class PlaceItemComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <li>{this.props.name}</li>;
    }
}
