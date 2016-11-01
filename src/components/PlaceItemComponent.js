/* jshint esversion:6 */


import React from 'react';

require('styles/PlacesList.css');


export default class PlaceItemComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <li><img src={this.props.src} style={{width:'40px',height: '40px'}}/>{this.props.name}</li>;
    }
}
