import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { HashRouter } from "react-router-dom";

import GoogleMapsSearch from "./components/Pages/Home";

class App extends Component {
  render() {
    return (
        <HashRouter>
          <Switch>
            <Route exact path="/" component={GoogleMapsSearch}/>
          </Switch>
        </HashRouter>
    );
  }
}

export default App;
