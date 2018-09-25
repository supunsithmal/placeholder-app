import React, { Component } from "react";

class CommentItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Comments</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.PostReducer.comments
  };
};

export default CommentItem;
