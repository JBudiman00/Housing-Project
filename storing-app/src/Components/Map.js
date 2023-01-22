import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '400px',
    height: '400px',
    marginLeft: '300px',
    marginRight: '50px',
    marginTop: '10px',
    borderRadius: '10px'
};

export class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{lat: 40.0, lng: -80}}
            >
                {console.log({lat: 40.0, lng: -80})}
                <Marker
                    name={'Dolores park'}
                    position={{lat: 40.0, lng: -80}} />
                <Marker />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBMdT1gM3sxgebpNmcoFFQcB4F23LMvPUY'
})(MapContainer);