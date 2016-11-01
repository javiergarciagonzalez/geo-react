export const UDPATE_LOCATION = 'UPDATE_LOCATION';

export const updateLocation = (location) => {
    console.log('JEYYYY', location);

    return {
        type: 'UPDATE_LOCATION',
        location
    };
}
