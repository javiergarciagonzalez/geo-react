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
    }

    render() {
        return <Tabs onSelect={this.handleSelect} selectedIndex={0} >

               <TabList>

                <Tab>Opened now</Tab>
                <Tab>Closed now</Tab>
               </TabList>

               <TabPanel>
                 <h2>{this.prefix}open restaurants!</h2>
                 <TabPlaces status="opened"/>
               </TabPanel>
               <TabPanel>
                 <h2>{this.prefix}closed restaurants!</h2>
                 <TabPlaces status="closed"/>
               </TabPanel>
             </Tabs>;
         }
}

render(<CustomTabsComponent/>, document.querySelector('.app'));
