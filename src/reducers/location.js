/* jshint esversion:6 */

import { combineReducers } from 'redux';

const initialState = {
    location: {
        lat: 52.37259273131223,
        lng: 4.89815354347229
    },
    type: 'cafe',
    status: 'opened'
};

function apiReducer(state = initialState, action) {
    switch (action.type) {
    case 'MAP_CHANGE_SUCCESS':
        console .log(action, 'ACTIONNNN'); // jshint ignore:line
        return Object.assign({}, state, { state: action.data });
    default:
    console.log('DEFAULT ----', state);
        return state;
    }
}

const reducers = combineReducers({ apiReducer });

export default reducers;
