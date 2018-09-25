import React, { Component } from "react";
import { connect } from "react-redux";

import { getUsers } from "../../actions/UserActions";
import UserProfile from "./UserProfile";

class UserList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    let userList = [];
    if (this.props.users.length > 0) {
      userList = this.props.users.map(user => {
        return <UserProfile key={user.id} user={user} />;
      });
    }

    return <div>{userList}</div>;
  }
}

const mapStateToProps = state => {
  return {
    users: state.UserReducer.users
  };
};

export default connect(
  mapStateToProps,
  { getUsers }
)(UserList);
