import React, { Component } from "react";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="nav flex-column nav-pills">
          <a className="nav-link active" href="#/news">
            News Feed
          </a>
          <a className="nav-link" href="#/todo">
            Todo
          </a>
          <a className="nav-link" href="#/profile">
            Prfile
          </a>
          <a className="nav-link" href="#/photos">
            Photos
          </a>
          <a className="nav-link" href="#/settings">
            Settings
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Sidebar;
