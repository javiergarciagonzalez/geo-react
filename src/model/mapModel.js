import Map from './../components/Map';

export default function initMap(props) {

    if (props && props.location) {

        let map = new window.google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: props.location
        });

        var marker = new window.google.maps.Marker({
            position: props.location,
            map: map
        });

        map.addListener('click', (e) => {
            console.log('click on map!');// eslint-disable-line no-console

            var position = {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
            };

            marker.setPosition(position);
            console.log('position setted');// eslint-disable-line no-console
            map.panTo(new window.google.maps.LatLng(position.lat, position.lng));

            props.onClick(position);
        });
    }
}
