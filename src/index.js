import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import CustomTabs from './components/CustomTabsComponent';
import Map from './components/Map';

// import MapComponent from './components/MapComponent';

class Application {
    constructor() {
        let map = new Map();
        map.initMap();
    }

    init() {
    }

    render() {
        console.debug('[App] - Render');// eslint-disable-line no-console
        ReactDOM.render(<CustomTabs />, document.querySelector('.app'));
        // ReactDOM.render(<MapComponent />, document.querySelector('#map'));
    }

}

window.Application = new Application();
window.Application.init();
