import React, { Component } from "react";
import "./Device.css";

class DeviceDisplayCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let backgroundColor = this.props.device.have ? "#0097a7" : "#d32f2f";

    return (
      <div
        className="card disaply-card"
        style={{ background: backgroundColor }}
      >
        <div>
          <h2>{this.props.device.name}</h2>
          <h5>{this.props.device.owner}</h5>
          <p class="small">{this.props.device.date}</p>
        </div>
      </div>
    );
  }
}

export default DeviceDisplayCard;
