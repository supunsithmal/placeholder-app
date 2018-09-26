import React, { Component } from "react";

class DeviceItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTextDisabled: false
    };
  }

  ownerChange = checked => {
    this.setState({
      isTextDisabled: !checked
    });
  };

  render() {
    let color = this.state.isTextDisabled ? "#AED581" : "#EF9A9A";
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
                    checked={!this.state.isTextDisabled}
                    onChange={event => {
                      this.ownerChange(event.target.checked);
                    }}
                  />
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="User"
                disabled={this.state.isTextDisabled}
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  Button
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
