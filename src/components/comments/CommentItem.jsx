import React, { Component } from "react";
import { getRandomColor } from "../../utils/Utils";

class CommentItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const imgUrl = "https://via.placeholder.com/25/" + getRandomColor();

    return (
      <div className="container">
        <div className="row comment-item">
          <img
            className="comment-thumbnail rounded"
            src={imgUrl}
            alt="placeholder"
          />
          <div className="col">
            <p className="small">{this.props.comment.body}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentItem;
