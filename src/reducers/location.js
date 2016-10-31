const updateLocation = (state, action) => {
    switch (action.type) {
        case 'UPDATE_LOCATION':
            console.log('ha entrado por el reducer');
            return state;
            break;
        default:
            return state;
            break;
    }
}


export default updateLocation;
