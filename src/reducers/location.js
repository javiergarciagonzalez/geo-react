import { combineReducers } from 'redux';

const initialState = {
    location: {
        lat: 52.37259273131223,
        lng: 4.89815354347229
    },
    type: 'bar',
    status: 'opened'
}

function apiReducer(state = initialState, action) {
    switch (action.type) {
    case 'MAP_CHANGE_SUCCESS':
        console.log(action, 'ACTIONNNN');
        return Object.assign({}, state, { state: action.data });
    default:
        return state;
    }
}

const reducers = combineReducers({ apiReducer });

export default reducers;
