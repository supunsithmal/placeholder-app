import React, { Component } from "react";
import CommentContainer from "../comments/CommentContainer";
import { getRandomColor } from "../../utils/Utils";

class PostItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const imgUrl = "https://via.placeholder.com/150/" + getRandomColor();
    return (
      <React.Fragment>
        <div className="container-fluid post-item card">
          <div className="row">
            <img
              className="profile-thumbnail rounded"
              src={imgUrl}
              alt="placeholder"
            />

            <div className="col">
              <h6>{this.props.user.name}</h6>
              <h5>{this.props.post.title}</h5>
              <p>{this.props.post.body}</p>
              <div>
                <CommentContainer postId={this.props.post.id} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PostItem;
