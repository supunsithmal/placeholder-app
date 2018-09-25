import React, { Component } from "react";
import { connect } from "react-redux";
import { getComments } from "../../actions/PostActions";
import CommentItem from "../comments/CommentItem";

class CommentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getComments(this.props.postId);
  }

  render() {
    let commentList = [];

    if (this.props.comments.length > 0) {
      commentList = this.props.comments.map(comment => {
        return <CommentItem key={comment.id} comment={comment} />;
      });
    }

    return (
      <React.Fragment>
        <div>{commentList}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.PostReducer.comments
  };
};

export default connect(
  mapStateToProps,
  { getComments }
)(CommentContainer);
