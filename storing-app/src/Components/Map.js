import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '400px',
    height: '400px',
    marginLeft: '100px',
    marginRight: '50px'
};

export class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={this.props.storageLocation}
            >
                {console.log(this.props.storageLocation)}
                <Marker
                    name={'Dolores park'}
                    position={this.props.storageLocation} />
                <Marker />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBMdT1gM3sxgebpNmcoFFQcB4F23LMvPUY'
})(MapContainer);