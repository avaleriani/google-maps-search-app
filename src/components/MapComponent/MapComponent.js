import React from "react";
import { GoogleApiWrapper, Map } from "google-maps-react";

const MapComponent = (props) => {
  const { google } = props;
  return (
    <Map
      google={google}
      initialCenter={{
        lat: 100,
        lng: 100
      }}
      center={{
        lat: props.lat,
        lng: props.lng
      }}
      style={{
        width: '300px',
        height: '300px'
      }}
      zoom={10}
    >
    </Map>
  );
};

const LoadingContainer = () => (
  <div>Loading Map...</div>
);

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  LoadingContainer: LoadingContainer
})(MapComponent);
