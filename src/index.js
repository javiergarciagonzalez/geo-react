import 'core-js/fn/object/assign';
import React from 'react';
import { render } from 'react-dom';
import CustomTabs from './components/CustomTabsComponent';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { locationReducer } from './reducers/location'

class Application extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const store = createStore(reducer);
        return (<Provider store={store} >
                            <CustomTabs />
                        </Provider>);
    }
}

render(<Application />, document.querySelector('.app'));
window.Application = new Application();
