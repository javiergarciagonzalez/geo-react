    /* jshint esversion:6 */

import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabPlaces from './TabPlacesComponent';
import { connect } from 'react-redux'
import { updateLocation } from './../actions/index-actions'
require('styles/CustomTabs.css');

class CustomTabsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.prefix = 'Here you can find ';
    }

    render() {
        return <Tabs onSelect={this.handleSelect} selectedIndex={0} >
                <TabList>
                    <Tab>Opened now</Tab>
                    <Tab>Closed now</Tab>
                </TabList>

                <TabPanel>
                    <h2>{this.prefix}open {this.props.type}s!</h2>
                    <TabPlaces status="opened" type={this.props.type} location={this.props.location} mapCallback={this.props.handleMapClick}/>
                </TabPanel>

                <TabPanel>
                    <h2>{this.prefix}closed {this.props.type}s!</h2>
                    <TabPlaces status="closed" type={this.props.type} location={this.props.location} mapCallback={this.props.handleMapClick}/>
                </TabPanel>
            </Tabs>;
         }
}

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
