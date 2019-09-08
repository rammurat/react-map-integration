import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateAddress, deleteAddress } from '../../actions/home.js';

class List extends Component {
  constructor(props) {
    super(props);
  }

  onUpdateAddress = (id) => {
    this.props.updateAddress(id)
  }

  onDeleteAddress = (id) => {
    this.props.deleteAddress(id)
  }

  render() {
    // count total number of addresses
    const list = this.props.addressList || []

    const items = list.length ? list.map(item => (
      <div className="col-sm-12 col-md-6 col-lg-6" key={Math.random()}>
        <div className="row">
          <p className="h4">{item.address}</p>
          <p>Address: {item.address}</p>
          <p>Latitude: {item.lat}</p>
          <p>Longitude: {item.lng}</p>
        </div>
        <div className="row">
          <div className="p-2">
            <button type="button" className="p-2 btn btn-primary" onClick={() => { this.onUpdateAddress(item._id) }}>Edit</button>
          </div>
          <div className="p-2">
            <button type="button" className="p-2 btn btn-primary" onClick={() => { this.onDeleteAddress(item._id) }}>Delete</button>
          </div>
        </div>
      </div>
    )) : false;

    return (
      <div className="list">
        <div className="row">
          {items}
        </div>
      </div>
    );
  }
}

List.propTypes = {
  updateAddress: PropTypes.func,
  deleteAddress: PropTypes.func,
  addressList: PropTypes.array
};

const mapDispatchToProps = {
  updateAddress,
  deleteAddress
}

export default connect(
  null,
  mapDispatchToProps
)(List);
