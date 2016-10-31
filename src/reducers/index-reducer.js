// import * as actions from './../actions/index-actions';
//
// export default () => {
//     return { actions };
// };

import { combineReducers } from 'redux';
import location from './location';

const rootReducer = combineReducers({
  location
})

export default rootReducer;
