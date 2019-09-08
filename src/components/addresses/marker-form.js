import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GoogleApiWrapper } from 'google-maps-react';
import CONFIG from '../../app-config.js'

class MarkerForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { newAddress: {} }
  }

  handleSubmit(e) {
    e.preventDefault()
    const address = this.state.newAddress
    this.props.addAddress(address)
    // @ts-ignore
    document.getElementById("autocompleteForm").reset()
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps.map)
      this.renderAutoComplete();
  }

  componentDidMount() {
    this.renderAutoComplete()
  }


  renderAutoComplete() {
    const { google, map } = this.props;
    if (!google) return;
    const autocomplete = new google.maps.places.Autocomplete(this.autocomplete);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (!place.geometry) return;

      this.setState({
        newAddress: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          address: place.formatted_address
        }
      })
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} id="autocompleteForm">
          <div className="form-group">
            <label htmlFor="address">Enter address:</label>
            <input
              placeholder="Enter a location"
              ref={ref => (this.autocomplete = ref)}
              type="text"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Add Map</button>
        </form>
      </div>
    );
  }
}

MarkerForm.propTypes = {
  addAddress: PropTypes.func
};

export default GoogleApiWrapper({
  apiKey: CONFIG.MAP_API_KEY
})(MarkerForm);