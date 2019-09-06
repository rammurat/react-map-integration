import { ADDRESS_LIST, UPDATE_ADDRESS } from './constants.js';

// reset home data on filter change and initial load
export const updateList = (data) => dispatch => {
  debugger
  dispatch({
    type: ADDRESS_LIST,
    payload: data
  })
};

// fetch latest addressList based on last filter action/default configuration
export const fetchAddressList = () => dispatch => {
  const data = [{ lat: 47.49855629475769, lng: -122.14184416996333, city: 'Delhi', address: 'Delhi, India' },
  { lat: 47.359423, long: -122.021071, city: 'Delhi', address: 'Delhi, India' },
  { lat: 47.2052192687988, long: -121.988426208496, city: 'Delhi', address: 'Delhi, India' },
  { lat: 47.6307081, long: -122.1434325, city: 'Delhi', address: 'Delhi, India' },
  { lat: 47.3084488, long: -122.2140121, city: 'Delhi', address: 'Delhi, India' },
  { lat: 47.5524695, long: -122.0425407, city: 'Delhi', address: 'Delhi, India' }]
  dispatch(updateList(data))
  return data
};

// update address
export const updateAddress = (type) => dispatch => {
  dispatch({
    type: UPDATE_ADDRESS,
    payload: type
  })
}

// add new address
export const addAddress = (address) => dispatch => {

}

// fetch address 
export const fetchAddress = () => {

}

// delete address
export const deleteAddress = (type) => dispatch => {

};
