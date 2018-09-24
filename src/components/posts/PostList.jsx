import React, { Component } from "react";
import { connect } from "react-redux";

import PostItem from "./PostItem";
import { getPosts } from "../../actions/PostActions";

class PostList extends Component {
  getPosts(user) {
    console.log("Refreshing Posts", this.props.posts);
    this.props.getPosts();
  }

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    let posts = [];
    if (this.props.posts.length > 0) {
      posts = this.props.posts.map(post => {
        return <PostItem post={post} />;
      });
    }

    return (
      <div className="container">
        <button
          className="btn btn-primary"
          onClick={() => this.getPosts("Supun")}
        >
          Refresh
        </button>

        {posts}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.PostReducer.posts
  };
};

export default connect(
  mapStateToProps,
  { getPosts }
)(PostList);
