import { ADDRESS_LIST, UPDATE_ADDRESS, MARKERS } from './constants.js';

// reset home data on filter change and initial load
export const updateList = (data) => dispatch => {
  dispatch({
    type: ADDRESS_LIST,
    payload: data
  })
};

// reset home data on filter change and initial load
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

// fetch latest addressList based on last filter action/default configuration
export const fetchAddressList = () => dispatch => {
  // data example 
  // [{ lat: 52.50697, lng: -13.2843066, address: 'Berlin, Germany' },
  // { lat: 48.1678936, lng: -11.554276, address: 'Berlin, Germany' }]

  return fetch('http://localhost:1234/list', {
    method: 'GET'
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      console.log(res)
      dispatch(updateList(res.data))
      dispatch(updateMarkers(res.data))
      return res
    })
    .catch((e) => {
      console.log(e)
    })

};

// fetch latest addressList based on last filter action/default configuration
export const fetchMarkers = () => dispatch => {
  // Markers example
  // [{ lat: 52.50697, lng: -13.2843066 },
  // { lat: 52.5156934, lng: -13.1735498 }]

  return fetch('http://localhost:1234/list', {
    method: 'GET'
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      console.log(res)
      dispatch(updateMarkers(res.data))
      return res
    })
    .catch((e) => {
      console.log(e)
    })

};

// add new address
export const addAddress = (address) => dispatch => {
  fetch('http://localhost:1234/list', {
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
      console.log(res)
    })
    .catch((e) => {
      console.log(e)
    })
}

// update address
export const updateAddress = (id) => dispatch => {
  return fetch(`http://localhost:1234/list/${id}`, {
    method: 'PUT',
  })
    .then((res) => {
      console.log(res.status)
      dispatch(fetchAddressList())
      return res
    })
    .catch((e) => {
      console.log(e)
    })
}

// delete address
export const deleteAddress = (id) => dispatch => {
  return fetch(`http://localhost:1234/list/${id}`, {
    method: 'DELETE',
  })
    .then((res) => {
      console.log(res.status)
      dispatch(fetchAddressList())
      return res
    })
    .catch((e) => {
      console.log(e)
    })
};
