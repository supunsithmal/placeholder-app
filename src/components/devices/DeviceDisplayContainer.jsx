import React, { Component } from "react";
import * as firebase from "firebase";

import DeviceDisplayCard from "./DeviceDisplayCard";

class DeviceDisplayContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: [],
      filteredDevices: []
    };
  }

  componentDidMount() {
    const db = firebase.database();
    const dbRef = db.ref().child("devices");

    dbRef.on("value", snapshot => {
      let devs = [];
      snapshot.forEach(child => {
        let childKey = child.key;
        let childData = child.val();
        childData.key = childKey;
        devs.push(childData);
      });

      this.setState({
        devices: devs,
        filteredDevices: devs
      });
    });
  }

  render() {
    let burrowedArray = this.state.devices.filter(
      device => device.have == false
    );

    let drawerArray = this.state.devices.filter(device => device.have == true);

    console.log(this.state.filteredDevices);
    console.log(burrowedArray);
    console.log(drawerArray);

    let burrowedList = [];
    let drawerList = [];

    if (this.state.filteredDevices.length > 0) {
      burrowedList = burrowedArray.map(device => {
        return <DeviceDisplayCard key={device.key} device={device} />;
      });
    }

    if (this.state.filteredDevices.length > 0) {
      drawerList = drawerArray.map(device => {
        return <DeviceDisplayCard key={device.key} device={device} />;
      });
    }

    return (
      <div className="display-grid">
        <div className="display-section">{drawerList}</div>
        <div className="display-section">{burrowedList}</div>
      </div>
    );
  }
}

export default DeviceDisplayContainer;
