import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import CustomTabs from './components/CustomTabsComponent';
    // import App from './components/Main';

// Render the main component into the dom
// ReactDOM.render(<CustomTabs/>, document.getElementById('app'));




class Application {
    constructor() {

        this.geo = navigator.geolocation.getCurrentPosition(function(position) {
            return {
                coords: {
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                }
            };
        });
    }

    init() {

        // bindAll(this, ['fetchModelData']);
        console.log('coords', this.geo);
        this.render();
    }


    render() {
        console.debug('[App] - Render');
        ReactDOM.render(<CustomTabs />, document.querySelector('.app'));
        // render(<Router history={hashHistory} routes={this.routes} />, document.querySelector('.app'));
    }

}

window.Application = new Application();
window.Application.init();
