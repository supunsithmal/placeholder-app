import React, { Component } from "react";
import { connect } from "react-redux";

import PostItem from "./PostItem";
import { getPosts } from "../../actions/PostActions";
import { getUsers } from "../../actions/UserActions";

class PostList extends Component {
  getPosts(user) {
    console.log("Refreshing Posts", this.props.posts);
    this.props.getPosts();
  }

  componentDidMount() {
    this.props.getUsers();
    this.props.getPosts();
  }

  getUserForId = userId => {
    let user = this.props.users.filter(user => user.id == userId);
    return user[0];
  };

  render() {
    let posts = [];
    if (this.props.posts.length > 0 && this.props.users.length > 0) {
      posts = this.props.posts.map(post => {
        return (
          <PostItem
            key={post.id}
            post={post}
            user={this.getUserForId(post.userId)}
          />
        );
      });
    }

    return <div className="">{posts}</div>;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.PostReducer.posts,
    users: state.UserReducer.users
  };
};

export default connect(
  mapStateToProps,
  { getPosts, getUsers }
)(PostList);
