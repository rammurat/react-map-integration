import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAddress, addAddress } from '../../actions/home.js';

class MarkerForm extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (e) => {
    this.props.addAddress()
  }

  onChange = (e) => {
    this.props.fetchAddress(e.target.value)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="address">Enter address:</label>
            <input type="text" className="form-control" id="address" name="address" onChange={this.onChange} />
          </div>
          <button type="button" className="btn btn-primary">Add Map</button>
        </form>
      </div>
    );
  }
}

MarkerForm.propTypes = {
  fetchAddress: PropTypes.func,
  addAddress: PropTypes.func
};

const mapDispatchToProps = {
  fetchAddress,
  addAddress
}

export default connect(
  null,
  mapDispatchToProps
)(MarkerForm);
