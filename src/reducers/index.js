import { combineReducers } from 'redux';
import markerList from './home.js';

export default combineReducers({
  addressList: markerList
});
