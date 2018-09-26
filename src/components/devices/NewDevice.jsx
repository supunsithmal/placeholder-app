import React, { Component } from "react";
import * as firebase from "firebase";

import "./Device.css";

class NewDevice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  addNewDevice() {
    const db = firebase.database();
    const dbRef = db.ref().child("devices");
    var newPostKey = dbRef.push().key;
    dbRef.child(newPostKey).set({
      name: this.state.name,
      have: false
    });

    console.log("Device Name", this.state.name);
  }

  render() {
    return (
      <div class="card device-card">
        <input
          type="text"
          className="form-control"
          placeholder="Device Name"
          onChange={event => {
            this.setState({
              name: event.target.value
            });
          }}
        />
        <button className="btn btn-primary" onClick={() => this.addNewDevice()}>
          Save
        </button>
      </div>
    );
  }
}

export default NewDevice;
