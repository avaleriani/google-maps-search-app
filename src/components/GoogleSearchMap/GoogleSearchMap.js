import React from "react";
import Geocode from "react-geocode";
import MapComponent from "../MapContainer/MapContainer";
import Button from "../Button/Button";
import styles from "./styles.module.css";


class GoogleSearchComponent extends React.Component {
  constructor() {
    super();
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
    this.state = {
      lat: 0,
      lng: 0,
      location: null
    };
    this.search = this.search.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  search() {
    Geocode.fromAddress(this.state.location).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
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

  onInput(evt) {
    this.setState({
      location: evt.target.value
    })
  }

  render() {
    return (
      <div className={styles["google-search-map"]}>
        <MapComponent lat={this.state.lat} lng={this.state.lng}/>
        <input
          type="text"
          placeholder="Where do you want to go?"
          className={styles["search-box"]}
          onChange={this.onInput}
        />
        <Button className={styles["button"]} onClick={this.search} label={"Search"}/>

      </div>
    )
  };
}

export default GoogleSearchComponent;
