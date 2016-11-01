import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import CustomTabs from './components/CustomTabsComponent';
import Map from './components/Map';

class Application {
    constructor() {
        let map = new Map();
    }

    render() {
        ReactDOM.render(<CustomTabs />, document.querySelector('.app'));
    }
}

window.Application = new Application();
window.Application.init();
