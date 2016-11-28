import { createStore } from 'redux';
import reducers from './reducers/location';

const store = createStore(reducers);
export default store;
