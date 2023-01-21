import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

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
                initialCenter={{lat: 37, lon: 122}}
            >
                <Marker
                    name={'Kenyatta International Convention Centre'}
                />
                <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={this.props.currentLocation} />
                <Marker
                    name={'Dolores park'}
                    position={this.props.storageLocation} />
                <Marker />
            </Map>



        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD2r9j7xpGztOjbKgrzAbm9EB70JfLL-LU'
})(MapContainer);