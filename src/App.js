import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import GoogleMapsSearch from "./components/Pages/Home";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={GoogleMapsSearch}/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
