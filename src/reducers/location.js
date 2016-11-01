import { connect } from 'react-redux'

let initialState = {
    location: {
        lat: 0,
        lng: 0
    },
    type: 'cafe',
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
