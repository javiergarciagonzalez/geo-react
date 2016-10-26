'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
require('styles/Restaurants.css');



export default class Restaurants extends React.Component {
    constructor(props) {
        super(props);
    }

    // init() {
    //     console.log('Init Restaurants component');
    // }

    render() {
        return <div>I'm a {this.props.type} restaurant!</div>;
    }
}

ReactDOM.render(<Restaurants/>, document.querySelector('.app'));
