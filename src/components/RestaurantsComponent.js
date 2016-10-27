/* jshint esversion:6 */

import React from 'react';
import ReactDOM from 'react-dom';
require('styles/Restaurants.css');
import Map from './MapComponent';




export default class Restaurants extends React.Component {
    constructor(props) {
        super(props);
    }

    // init() {
    //     console.log('Init Restaurants component');
    // }

    render() {
        let status = this.props.status === 'opened' ? true : false;
        return (<div>We're {this.props.status} restaurants!
          <Map status={status}/>
        </div>);
    }
}
