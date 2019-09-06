import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAddressList } from '../../actions/home.js';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './index.scss'
import CONFIG from '../../app-config.js'


const mapStyles = {
    width: '100%',
    height: '100%',
};

class MapMarkers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stores: [{ lat: 47.49855629475769, lng: -122.14184416996333 },
            { lat: 47.359423, long: -122.021071 },
            { lat: 47.2052192687988, long: -121.988426208496 },
            { lat: 47.6307081, long: -122.1434325 },
            { lat: 47.3084488, long: -122.2140121 },
            { lat: 47.5524695, long: -122.0425407 }]
        }
    }

    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
            return <Marker key={index} id={index} position={{
                lat: store.latitude,
                lng: store.longitude
            }}
                onClick={() => console.log("You clicked me!")} />
        })
    }


    render() {
        return (
            <div className="map-container">
                <Map
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 47.444, lng: -122.176 }}
                >
                    {this.displayMarkers()}
                </Map>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    markers: state.addressList.products,
});

export default GoogleApiWrapper({
    apiKey: CONFIG.MAP_API_KEY
})(MapMarkers);
