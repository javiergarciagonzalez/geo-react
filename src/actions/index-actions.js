/* jshint esversion:6 */
export const UDPATE_LOCATION = 'UPDATE_LOCATION';

export const updateLocation = (location) => {

    return {
        type: 'MAP_CHANGE_SUCCESS',
        location
    };
};
