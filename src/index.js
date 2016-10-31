import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/location';
import CustomTabs from './components/CustomTabsComponent';
import Map from './components/Map';

class Application {
    constructor() {


        console.log('REDUCEEEEEEEEEER', reducer);

        const map = new Map(),
            initialStatus = { location: null, status: null, type: null },
            store = createStore(reducer, initialStatus);
    }

    init() {
    }

    render() {

        ReactDOM.render(
            <Provider store={this.store}>
                <CustomTabs />
            </Provider>,
            document.querySelector('.app'));
    }

}

window.Application = new Application();
window.Application.init();
