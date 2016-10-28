/* jshint esversion:6 */


import React from 'react';
import PlaceItemComponent from './PlaceItemComponent';
require('styles/RestaurantList.css');


export default class RestaurantListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: null };
     }

     componentWillMount() {

         let google = window.google && window.google.maps;

         if (!google) {
             console.error(// eslint-disable-line no-console
             'Google map api was not found in the page.');
             return;
          }

         let point = {
             lat: 52.375592,
             lng: 4.895803
         },
         request = {
             location: point,
             radius: '500',
             types: ['restaurants']
         },
        places = document.getElementById('places'),
        service = new window.google.maps.places.PlacesService(places);

         service.nearbySearch(request, (data) => {

             if (data) {
                 this.setGoogleState(data);
             }
         });
     }

     componentDidMount() {
         this.ifMounted = true;
     }

     setGoogleState (data) {
         if (this.ifMounted) {
             this.setState({ data });
         } else {
             this.state = { data };
         }
     }

    render() {

        if (this.state && this.state.data) {

            return (<ul id="restaurants-list">
            {this.state.data.map((listValue) => {
                if (listValue.opening_hours && listValue.opening_hours.open_now && this.props.status) {
                    return <PlaceItemComponent key={listValue.id} name={listValue.name} />;
                }else if (!this.props.status && !listValue.opening_hours){
                    return <PlaceItemComponent key={listValue.id} name={listValue.name} />;
                }
            })}</ul>);
        }

        return <div>Loading...</div>;
    }
}
