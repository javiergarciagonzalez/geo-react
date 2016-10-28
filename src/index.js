import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import CustomTabs from './components/CustomTabsComponent';

class Application {
    constructor() {

    }

    init() {
    }


    render() {
        console.debug('[App] - Render');
        ReactDOM.render(<CustomTabs />, document.querySelector('.app'));
    }

}

window.Application = new Application();
window.Application.init();
