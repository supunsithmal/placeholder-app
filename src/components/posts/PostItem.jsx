import React, { Component } from "react";
import { connect } from "react-redux";
import { getComments } from "../../actions/PostActions";
import CommentItem from "../comments/CommentItem";

class PostItem extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getComments(this.props.postId);
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
              <h6>{this.props.user.name}</h6>
              <h5>{this.props.post.title}</h5>
              <p>{this.props.post.body}</p>
              <div class="card container-fluid">
                <CommentItem />
              </div>
            </div>
          </div>
        </div>
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
)(PostItem);
