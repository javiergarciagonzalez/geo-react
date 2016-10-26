'use strict';

import React from 'react';

require('styles//Map.css');


export default class MapComponent extens React.Component {
    constructor(props) {
        super(props);
        init();
    }

    init () {
        
    }

    render() {
        return  <div id="map"></div>;
    }
}


let MapComponent = (props) => (
  <div className="map-component">
    Please edit src/components///MapComponent.js to update this component!
  </div>
);

MapComponent.displayName = 'MapComponent';

// Uncomment properties you need
// MapComponent.propTypes = {};
// MapComponent.defaultProps = {};

export default MapComponent;
