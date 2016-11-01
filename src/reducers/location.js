import { connect } from 'react-redux'

let initialState = {
    location: {
        lat: 52.37259273131223,
        lng: 4.89815354347229
    },
    type: 'bar',
    status: 'opened'
}

export const locationReducer = (state=initialState, action) => {

    switch (action.type) {
        case 'UPDATE_LOCATION':
            let newState = Object.assign({}, state, {location: action.location})
            return newState;
            break;
        default:
            return state;
            break;
    }
}
