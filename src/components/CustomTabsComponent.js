/* jshint esversion:6 */

import React from 'react';
import { render } from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux';
import actions from './../actions/index-actions';
import TabPlaces from './TabPlacesComponent';
import { updateLocation } from './../actions/index-actions';
import * as IndexActions from './../actions/index-actions';
require('styles/CustomTabs.css');

class CustomTabsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.prefix = 'Here you can find ';
        this.state = { type: 'restaurant', location: null };
        updateLocation({ lat: 52.375592, lng: 4.895803 });
    }

    render() {
        return <Tabs onSelect={this.handleSelect} selectedIndex={0} >

                <TabList>
                    <Tab>Opened now</Tab>
                    <Tab>Closed now</Tab>
                </TabList>

                <TabPanel>
                    <h2>{this.prefix}open {this.state.type}s!</h2>
                    <TabPlaces status="opened" type={this.state.type}/>
                </TabPanel>
                <TabPanel>
                    <h2>{this.prefix}closed {this.state.type}s!</h2>
                    <TabPlaces status="closed" type={this.state.type}/>
                </TabPanel>

            </Tabs>;
         }
}

// render(<CustomTabsComponent/>, document.querySelector('.app'));

const mapStateToProps = state => ({
  location
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(IndexActions, dispatch)
});

export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(CustomTabsComponent)
