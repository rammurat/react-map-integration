import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.scss'

// load components
import MarkerForm from '../../components/addresses/marker-form.js';
import List from '../../components/addresses/list.js'
import Map from '../../components/map/index.js'

import { addAddress, fetchAddressList, fetchMarkers, updateMapError } from '../../actions/home.js';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // load data on component ready
        this.props.fetchAddressList();
        this.props.fetchMarkers();
    }
    render() {
        const { addressList, markers, mapError, dbError } = this.props
        return (
            <div className="container">
                {mapError &&
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        {mapError}
                    </div>}
                <div className="row">
                    <div className="col-sm-12 col-md-5 col-lg-5">
                        <Map markers={markers} />
                    </div>
                    <div className="list-cnt col-sm-12 col-md-6 col-lg-6 offset-md-1 offset-lg-1">
                        <MarkerForm addAddress={this.props.addAddress} updateMapError={this.props.updateMapError} />

                        <List addressList={addressList} dbError={dbError} />
                    </div>
                </div>
            </div>
        )
    }
}

HomePage.propTypes = {
    addAddress: PropTypes.func,
    addressList: PropTypes.array,
    markers: PropTypes.array,
    updateMapError: PropTypes.func,
    mapError: PropTypes.string,
    dbError: PropTypes.string
};

const mapStateToProps = state => ({
    addressList: state.home.addressList,
    markers: state.home.markers,
    mapError: state.home.mapError,
    dbError: state.home.dbError
});

const mapDispatchToProps = {
    addAddress,
    fetchAddressList,
    fetchMarkers,
    updateMapError
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);