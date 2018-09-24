import React, { Component } from "react";

class PostItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid post-item card">
          <div className="row">
            <img
              className="profile-thumbnail rounded"
              src="https://via.placeholder.com/150/771796"
              alt="placeholder"
            />
            <div className="col">
              <h5>{this.props.post.title}</h5>
              <p>{this.props.post.body}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PostItem;
