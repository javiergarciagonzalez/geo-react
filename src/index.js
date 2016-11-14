/* jshint esversion:6 */

import 'core-js/fn/object/assign';
import React from 'react';
import { render } from 'react-dom';
import CustomTabs from './components/CustomTabsComponent';
import { Provider } from 'react-redux';
import store from './store';
require('styles/App.css');


class Application extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Provider store={store} >
                            <CustomTabs />
                        </Provider>);
    }
}
render(<Application />, document.querySelector('.app'));

window.Application = new Application();
