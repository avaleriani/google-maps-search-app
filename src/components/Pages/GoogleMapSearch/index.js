import React from "react";

import NavBar from "../../NavBar";
import Geocode from "react-geocode";
import MapComponent from "../../MapComponent/MapComponent";


export default class GoogleMapSearch extends React.Component {
  constructor() {
    super();
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
    console.log(Geocode)
    this.state = {
      lat: 10,
      lng: 10
    };
    this.search = this.search.bind(this);
  }

  search(evt) {
    console.log('aa')
    Geocode.fromAddress(evt.target.value).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        this.setState({
          lat: lat,
          lng: lng
        })
      },
      error => {
        console.error(error);
      }
    );
  }

  render() {
    return (
      <div>
        <NavBar/>
        <MapComponent lat={this.state.lat} lng={this.state.lng}/>
        <input
          type="text"
          placeholder="Customized your placeholder"
          style={{
            position: 'absolute',
            width: `240px`,
            height: `32px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`
          }}
          onChange={this.search}
        />
        <button onClick={this.search}>Search</button>

      </div>
    )
  };
}


