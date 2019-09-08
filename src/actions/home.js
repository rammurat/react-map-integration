import { ADDRESS_LIST, MARKERS } from './constants.js';
import CONFIG from '../app-config'

// update addressList on addition/deletion any record from system
export const updateList = (data) => dispatch => {
  dispatch({
    type: ADDRESS_LIST,
    payload: data
  })
};

// update markers on addition/deletion any record from system
export const updateMarkers = (res) => dispatch => {
  const data = res.map((item) => {
    return {
      lat: item.lat,
      lng: item.lng
    }
  })

  dispatch({
    type: MARKERS,
    payload: data
  })
};

// fetch latest addressList 
export const fetchAddressList = () => dispatch => {
  // data example 
  // [{ lat: 52.50697, lng: -13.2843066, address: 'Berlin, Germany' },
  // { lat: 48.1678936, lng: -11.554276, address: 'Berlin, Germany' }]

  return fetch(CONFIG.API_URL, {
    method: 'GET'
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      console.log('Fetch all records.')
      dispatch(updateList(res.data))
      dispatch(updateMarkers(res.data))
      return res
    })
    .catch((e) => {
      console.log(e)
    })

};

// fetch latest markers 
export const fetchMarkers = () => dispatch => {
  // Markers example
  // [{ lat: 52.50697, lng: -13.2843066 },
  // { lat: 52.5156934, lng: -13.1735498 }]

  return fetch(CONFIG.API_URL, {
    method: 'GET'
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      console.log('Fetch all markers.')
      dispatch(updateMarkers(res.data))
      return res
    })
    .catch((e) => {
      console.log(e)
    })

};

// add new address
export const addAddress = (address) => dispatch => {
  fetch(CONFIG.API_URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(address)
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      dispatch(fetchAddressList())
      console.log('Add new address complete.')
    })
    .catch((e) => {
      console.log(e)
    })
}

// update address
export const updateAddress = (id) => dispatch => {
  return fetch(`${CONFIG.API_URL}/${id}`, {
    method: 'PUT',
  })
    .then((res) => {
      console.log('Existing record updated.')
      dispatch(fetchAddressList())
      return res
    })
    .catch((e) => {
      console.log(e)
    })
}

// delete address
export const deleteAddress = (id) => dispatch => {
  return fetch(`${CONFIG.API_URL}/${id}`, {
    method: 'DELETE',
  })
    .then((res) => {
      console.log('Existing record deleted.')
      dispatch(fetchAddressList())
      return res
    })
    .catch((e) => {
      console.log(e)
    })
};
