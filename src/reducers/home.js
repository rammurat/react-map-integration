import { ADDRESS_LIST, INITIAL_CONFIG, UPDATE_ADDRESS } from '../actions/constants.js';
import config from '../app-config.js'
// initial address list state
const initialState = {
  products: [],
  initialConfig: {}
};

export default function (state = initialState, action) {
  switch (action.type) {

    case ADDRESS_LIST:
      return {
        ...state,
        products: action.payload
      };

    case INITIAL_CONFIG:
      return {
        ...state,
        initialConfig: action.payload
      };

    case UPDATE_ADDRESS:
      return {
        ...state,
        selectedOrder: action.payload
      };


    default:
      return state;
  }
}
