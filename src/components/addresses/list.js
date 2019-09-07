import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateAddress, deleteAddress } from '../../actions/home.js';

class List extends Component {
  constructor(props) {
    super(props);
  }

  onUpdateAddress = (e) => {
    this.props.updateAddress()
  }

  onDeleteAddress = (e) => {
    this.props.deleteAddress()
  }

  render() {
    // count total number of properties
    const list = this.props.addressList || []

    const items = list.length && list.map(item => (
      <div className="list" key={Math.random()}>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="row">
              <p>{item.address}</p>
              <p>{item.postCode}</p>
              <p>{item.lat}</p>
              <p>{item.long}</p>
            </div>
            <div className="row">
              <div className="p-2">
                <button type="button" className="p-2 btn btn-primary" onClick={this.onUpdateAddress}>Edit</button>
              </div>
              <div className="p-2">
                <button type="button" className="p-2 btn btn-primary" onClick={this.onDeleteAddress}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));

    return (
      <div>
        {/** Load home items */}
        {items}
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
