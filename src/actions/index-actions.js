export const UDPATE_LOCATION = 'UPDATE_LOCATION';

export const updateLocation = (location) => {
    console.log('en el action si que entra');
    return {
        type: 'MAP_CHANGE_SUCCESS',
        location
    };
}
