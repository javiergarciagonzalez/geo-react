import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import CustomTabs from './components/CustomTabsComponent';

class Application {
    constructor() {
    }

    render() {
        ReactDOM.render(<CustomTabs />, document.querySelector('.app'));
    }
}

window.Application = new Application();
