import React, { Component } from "react";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="col-2">
          <div className="nav flex-column nav-pills">
            <a class="nav-link active" href="#/news">
              News Feed
            </a>
            <a class="nav-link" href="#/todo">
              Todo
            </a>
            <a class="nav-link" href="#/profile">
              Prfile
            </a>
            <a class="nav-link" href="#/photos">
              Photos
            </a>
            <a class="nav-link" href="#/settings">
              Settings
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Sidebar;
