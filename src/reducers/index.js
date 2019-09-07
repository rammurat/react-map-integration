import { combineReducers } from 'redux';
import homeReducer from './home.js';

export default combineReducers({
  home: homeReducer
});
