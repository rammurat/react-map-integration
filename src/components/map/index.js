import React, { Component } from 'react';
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
    }

    displayMarkers = () => {
        const markers = this.props.markers || []
        return markers.lenght && markers.map((store, index) => {
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
                    id="map"
                    initialCenter={{ lat: 47.444, lng: -122.176 }}
                >
                    {this.displayMarkers()}
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: CONFIG.MAP_API_KEY
})(MapMarkers);
