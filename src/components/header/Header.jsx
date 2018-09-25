import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand">Home</a>
          <button className="btn btn-primary">Logout</button>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
