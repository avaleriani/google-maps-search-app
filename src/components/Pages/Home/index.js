import React from "react";
import NavBar from "../../NavBar/NavBar";
import GoogleSearchMap from "../../GoogleSearchMap/GoogleSearchMap";
import styles from './styles.module.css';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      mapQuantity: 0
    };
    this.addMap = this.addMap.bind(this);
  }

  addMap() {
    console.log(this.state.mapQuantity)
    this.setState(prevState => {
      return { mapQuantity: prevState.mapQuantity + 1 }
    });
  }

  render() {
    return (
      <div className={styles['home']}>
        <NavBar buttonFunctionality={this.addMap}/>
        <div className={styles['maps-container']}>
          <GoogleSearchMap/>
          {
            [...Array(this.state.mapQuantity)].map((e, i) => {
              return <GoogleSearchMap key={`map-${i}`}/>
            })
          }
        </div>
      </div>
    )
  };
}


