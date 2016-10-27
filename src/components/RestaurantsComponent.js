/* jshint esversion:6 */

import React from 'react';
import ReactDOM from 'react-dom';
require('styles/Restaurants.css');
import RestaurantList from './RestaurantListComponent';

export default class Restaurants extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let status = this.props.status === 'opened' ? true : false;
        return (<div>We're {this.props.status} restaurants!
          <RestaurantList status={status}/>
        </div>);
    }
}
