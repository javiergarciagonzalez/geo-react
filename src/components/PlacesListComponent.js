/* jshint esversion:6 */


import React from 'react';
import PlaceItemComponent from './PlaceItemComponent';
require('styles/PlacesList.css');


export default class PlacesListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: null, location: this.props.location };
     }

     componentWillMount() {

        this.setState({location: this.getMapLocation()});
        let google = window.google && window.google.maps;

        if (!google) {
            console.error(// eslint-disable-line no-console
            'Google map api was not found in the page.');
            return;
        }

        new window.google.maps.Map(document.getElementById('places'), {
            center: this.props.location ,
            zoom: 15
        });

         let request = {
             location: this.props.location,
             radius: '50',
             types: this.props.type
         },
        places = document.getElementById('places'),
        service = new window.google.maps.places.PlacesService(places);

         service.nearbySearch(request, (data) => {
             if (data) {
                 console.log(data, 'daaaaaaaaaaaaaaaaaata'); //jshint ignore:line
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

     getMapLocation() {
         return this.props.location;
     }


     componentWillReceiveProps(data) {

       this.setState({ location: data.location });


                let request = {
                    location: this.props.location,
                    radius: '500',
                    types: [this.props.type]
                },
               places = document.getElementById('places'),
               service = new window.google.maps.places.PlacesService(places);

                service.nearbySearch(request, (data) => {

                    if (data) {
                        this.setGoogleState(data);
                    }
                });
     }
    render() {
        if (this.state && this.state.data) {
            return (<ul id="restaurants-list">
            {this.state.data.map((listValue) => {
                if (listValue.opening_hours && listValue.opening_hours.open_now && this.props.status) {
                    return <PlaceItemComponent key={listValue.id} name={listValue.name} src={listValue.icon} />;
                }else if (!this.props.status && !listValue.opening_hours){
                    return <PlaceItemComponent key={listValue.id} name={listValue.name} />;
                }
            })}</ul>);
        }

        return <div>Loading...</div>;
    }
}
