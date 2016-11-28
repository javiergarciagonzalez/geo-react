/* jshint esversion:6 */

import 'core-js/fn/object/assign';
import React from 'react';
import { render } from 'react-dom';
import CustomTabs from './components/CustomTabsComponent';
import { Provider } from 'react-redux';
import store from './store';
import { connect } from 'react-redux';
import { updateLocation } from './actions/index-actions';
require('styles/App.css');

class Application extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Provider store={store} >
                    <CustomTabs {...this.props.location}/>
                </Provider>);
    }
}
rxender(<Application />, document.querySelector('.app'));

const mapStateToProps = (store) => {
    return {
        location: store.apiReducer.location
    }
}

const mapDispatchToProps = (dispatch) => ({
  handleMapClick: (location) => {
    console.log('dispatching!', location);
        dispatch(updateLocation(location))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomTabsComponent)


window.Application = new Application();
