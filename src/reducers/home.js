import { ADDRESS_LIST, INITIAL_CONFIG, UPDATE_ADDRESS, DELETE_ADDRESS, MARKERS, MAP_ERROR, DB_ERROR } from '../actions/constants.js';

// initial address list state
const initialState = {
  addressList: [],
  markers: [],
  initialConfig: {},
  dbError: '',
  mapError: ''
};

export default function (state = initialState, action) {
  switch (action.type) {

    case ADDRESS_LIST:
      return {
        ...state,
        addressList: action.payload
      };

    case MARKERS:
      return {
        ...state,
        markers: action.payload
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

    case DELETE_ADDRESS:
      return {
        ...state,
        selectedOrder: action.payload
      };

    case MAP_ERROR:
      return {
        ...state,
        mapError: action.payload
      };

    case DB_ERROR:
      return {
        ...state,
        dbError: action.payload
      };

    default:
      return state;
  }
}
