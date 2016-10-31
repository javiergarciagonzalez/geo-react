export const UDPATE_LOCATION = 'UPDATE_LOCATION';


// export const handleMapClick = () => {
//     console.log('_+_+_+_+_+_+_+_+_+_', location, this);
// }



export const updateLocation = (location) => {
    console.log('JEYYYY');

    return {
    type: 'UPDATE_LOCATION',
    location
};
}
