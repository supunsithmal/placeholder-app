import React, { Component } from "react";
import { HashRouter, Link, Route, Switch } from "react-router-dom";

import "./Grid.css";

import DeviceDisplayContainer from "./components/devices/DeviceDisplayContainer";
import DeviceContainer from "./components/devices/DeviceContainer";

class DeviceManager extends Component {
  render() {
    return (
      <div className="container-fluid">
        <HashRouter>
          <div>
            <Route exact path="/dashboard" component={DeviceDisplayContainer} />
            <Route exact path="/createnew" component={DeviceContainer} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default DeviceManager;
