'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Restaurants from './RestaurantsComponent';
require('styles/CustomTabs.css');

class CustomTabsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.prefix = 'Here you can find ';
    }

    handleSelect() {
    //   console.log('Selected tab: ' + index + ', Last tab: ' + last);
      return null;
    }

    render() {
        return <Tabs onSelect={this.handleSelect} selectedIndex={2} >

               <TabList>

                <Tab>Thai</Tab>
                <Tab>Italian</Tab>
                <Tab>Burger</Tab>
               </TabList>

               <TabPanel>
                 <h2>{this.prefix}Thai food!</h2>
                 <Restaurants type="thai"/>
               </TabPanel>
               <TabPanel>
                 <h2>{this.prefix}Italian food!</h2>
                 <Restaurants type="italian"/>
               </TabPanel>
               <TabPanel>
                 <h2>{this.prefix}Burgers!</h2>
                 <Restaurants type="burger"/>
               </TabPanel>
             </Tabs>
         }
}

render(<CustomTabsComponent/>, document.querySelector('.app'));


// CustomTabsComponent.displayName = 'SrcComponentsCustomTabsComponent';

export default CustomTabsComponent;
