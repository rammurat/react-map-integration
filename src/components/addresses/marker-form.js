import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import CONFIG from '../../app-config.js'

class MarkerForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addAddress(e.target.value)
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

    if (!google || !map) return;

    const autocomplete = new google.maps.places.Autocomplete(this.autocomplete);
    autocomplete.bindTo('bounds', map);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();

      if (!place.geometry) return;

      if (place.geometry.viewport) map.fitBounds(place.geometry.viewport);
      else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }

      this.setState({ position: place.geometry.location });
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="address">Enter address:</label>
            <input
              placeholder="Enter a location"
              ref={ref => (this.autocomplete = ref)}
              type="text"
              value={this.props.addressToUpdate}
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