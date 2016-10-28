/* jshint esversion:6 */

import React from 'react';
import { render } from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabPlaces from './TabPlacesComponent';
require('styles/CustomTabs.css');

export default class CustomTabsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.prefix = 'Here you can find ';
        this.state = { type: 'cafe' }
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

render(<CustomTabsComponent/>, document.querySelector('.app'));
