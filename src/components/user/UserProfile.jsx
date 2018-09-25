import React, { Component } from "react";

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let user = this.props.user;

    const pills = user.company.catchPhrase.split(" ").map(str => {
      return (
        <span key={str} className="badge badge-pill badge-primary">
          {str}
        </span>
      );
    });

    return (
      <React.Fragment>
        <div className="container card profile-card">
          <div className="row">
            <img
              className="rounded profile-pic"
              src="https://via.placeholder.com/150/771796"
              alt="placeholder"
            />
            <div className="col">
              <h4>{user.name}</h4>
              <h6>{user.company.name}</h6>
              <p>
                <small>{user.phone}</small>
              </p>
              <p>
                <small>
                  {user.address.street},{user.address.suite},{user.address.city}
                  <br />
                  {user.address.zipcode}
                </small>
              </p>
              <a href={user.email}>{user.email}</a>
              <br />
              <a href={user.website}>{user.website}</a>
              <div>{pills}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserProfile;
