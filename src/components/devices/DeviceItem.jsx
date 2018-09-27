import React, { Component } from "react";
import * as firebase from "firebase";

class DeviceItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHave: true,
      owner: ""
    };
  }

  onCheckChange = checked => {
    console.log("checked");
    this.setState({
      isHave: !checked
    });
  };

  onOwnerChange = name => {
    console.log(name);
    this.setState({
      owner: name
    });
  };

  componentDidMount() {
    this.setState({
      isHave: this.props.device.have,
      owner: this.props.device.owner
    });
  }

  updateDevice = () => {
    const db = firebase.database();
    const dbRef = db.ref().child("devices");
    dbRef.child(this.props.device.key).update({
      have: this.state.isHave,
      owner: this.state.isHave ? "" : this.state.owner,
      date: new Date()
    });

    this.setState({
      owner: this.state.isHave ? "" : this.state.owner
    });
  };

  render() {
    let color = this.props.device.have ? "#AED581" : "#EF9A9A";
    return (
      <React.Fragment>
        <div className="card device-card" style={{ background: color }}>
          <div className="">
            <h5>{this.props.device.name}</h5>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <input
                    type="checkbox"
                    checked={!this.state.isHave}
                    onChange={event => {
                      this.onCheckChange(event.target.checked);
                    }}
                  />
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                value={this.state.owner}
                disabled={this.state.isHave}
                onChange={event => {
                  this.onOwnerChange(event.target.value);
                }}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => this.updateDevice()}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DeviceItem;
