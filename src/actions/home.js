import { ADDRESS_LIST, UPDATE_ADDRESS, MARKERS } from './constants.js';

// reset home data on filter change and initial load
export const updateList = (data) => dispatch => {
  dispatch({
    type: ADDRESS_LIST,
    payload: data
  })
};

// reset home data on filter change and initial load
export const updateMarkers = (data) => dispatch => {
  dispatch({
    type: MARKERS,
    payload: data
  })
};

// fetch latest addressList based on last filter action/default configuration
export const fetchAddressList = () => dispatch => {
  // data example 
  // [{ lat: 52.50697, lng: -13.2843066, postCode: 'Delhi', address: 'Delhi, India' },
  // { lat: 52.5156934, lng: -13.1735498, postCode: 'Delhi', address: 'Delhi, India' },
  // { lat: 48.1550039, lng: -11.4716246, postCode: 'Delhi', address: 'Delhi, India' },
  // { lat: 48.1678936, lng: -11.554276, postCode: 'Delhi', address: 'Delhi, India' }]

  return fetch('http://localhost:1234/list', {
    method: 'GET'
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      console.log(res)
      dispatch(updateList(res.data))
      return res
    })
    .catch((e) => {
      console.log(e)
    })

};

// fetch latest addressList based on last filter action/default configuration
export const fetchMarkers = () => dispatch => {
  const data = [{ lat: 52.50697, lng: -13.2843066 },
  { lat: 52.5156934, lng: -13.1735498 },
  { lat: 48.1550039, lng: -11.4716246 },
  { lat: 48.1678936, lng: -11.554276 }]

  dispatch(updateMarkers(data))
  return data
};

// update address
export const updateAddress = (type) => dispatch => {
  // dispatch({
  //   type: UPDATE_ADDRESS,
  //   payload: type
  // })
}

// add new address
export const addAddress = (adrs) => dispatch => {
  const address = { lat: 52.50697, lng: -13.2843066, postCode: 'Delhi', address: adrs }
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
      console.log(res)
    })
    .catch((e) => {
      console.log(e)
    })
}

// fetch address 
export const fetchAddress = () => dispatch => {
  // const response = {
  //   'results': [
  //     {
  //       'address_components': [
  //         {
  //           'lng_name': '277',
  //           'short_name': '277',
  //           'types': ['street_number']
  //         },
  //         {
  //           'lng_name': 'Bedford Avenue',
  //           'short_name': 'Bedford Ave',
  //           'types': ['route']
  //         },
  //         {
  //           'lng_name': 'Williamsburg',
  //           'short_name': 'Williamsburg',
  //           'types': ['neighborhood', 'political']
  //         },
  //         {
  //           'lng_name': 'Brooklyn',
  //           'short_name': 'Brooklyn',
  //           'types': ['sublocality', 'political']
  //         },
  //         {
  //           'lng_name': 'Kings',
  //           'short_name': 'Kings',
  //           'types': ['administrative_area_level_2', 'political']
  //         },
  //         {
  //           'lng_name': 'New York',
  //           'short_name': 'NY',
  //           'types': ['administrative_area_level_1', 'political']
  //         },
  //         {
  //           'lng_name': 'United States',
  //           'short_name': 'US',
  //           'types': ['country', 'political']
  //         },
  //         {
  //           'lng_name': '11211',
  //           'short_name': '11211',
  //           'types': ['postal_code']
  //         }
  //       ],
  //       'formatted_address': '277 Bedford Avenue, Brooklyn, NY 11211, USA',
  //       'geometry': {
  //         'location': {
  //           'lat': 40.714232,
  //           'lng': -73.9612889
  //         },
  //         'location_type': 'ROOFTOP',
  //         'viewport': {
  //           'northeast': {
  //             'lat': 40.7155809802915,
  //             'lng': -73.9599399197085
  //           },
  //           'southwest': {
  //             'lat': 40.7128830197085,
  //             'lng': -73.96263788029151
  //           }
  //         }
  //       },
  //       'place_id': 'ChIJd8BlQ2BZwokRAFUEcm_qrcA',
  //       'types': ['street_address']
  //     },
  //   ],
  //   'status': 'OK'
  // }

  // const newData = {
  //   postCode: response.results[7].address_components['postal_code'],
  //   lat: response.results[0].geometry.location.lat,
  //   lng: response.results[0].geometry.location.lng
  // }
  // // add new address to db
  // dispatch(addAddress(newData))

  // return fetchAddressList()
}

// delete address
export const deleteAddress = (type) => dispatch => {
  return fetch('http://localhost:1234/list?id=5d742d45055de93275a7dd90', {
    method: 'DELETE',
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      console.log(res)
      return res
    })
    .catch((e) => {
      console.log(e)
    })
};
