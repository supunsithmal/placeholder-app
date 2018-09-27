import React, { Component } from "react";
import DeviceItem from "./DeviceItem";
import "./Device.css";
import NewDevice from "./NewDevice";
import * as firebase from "firebase";

class DeviceContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredDevices: [],
      devices: []
    };
  }

  componentDidMount() {
    this.setState({
      filteredDevices: this.state.devices
    });

    const db = firebase.database();
    const dbRef = db.ref().child("devices");

    dbRef.on("value", snapshot => {
      let devs = [];
      snapshot.forEach(child => {
        let childKey = child.key;
        let childData = child.val();
        childData.key = childKey;
        console.log("data", childData);
        devs.push(childData);
      });

      this.setState({
        devices: devs,
        filteredDevices: devs
      });
    });
  }

  onTextChange = text => {
    let filterd = this.state.devices.filter(device =>
      device.name.includes(text)
    );
    console.log("Searching", filterd);
    this.setState({
      filteredDevices: filterd
    });
  };

  render() {
    let deviceList = [];
    if (this.state.filteredDevices.length > 0) {
      deviceList = this.state.filteredDevices.map(device => {
        return <DeviceItem key={device.key} device={device} />;
      });
    }

    return (
      <div>
        <div>
          <NewDevice />
        </div>
        <div className="card device-card">
          <input
            type="search here"
            placeholder="device"
            className="form-control"
            onChange={event => {
              this.onTextChange(event.target.value);
            }}
          />
        </div>
        <div className="device-grid">{deviceList}</div>
      </div>
    );
  }
}

export default DeviceContainer;
