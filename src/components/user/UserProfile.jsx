import React, { Component } from "react";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    };
  }
  render() {
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
              <h4>{this.state.name}</h4>
              <h6>{this.state.company.name}</h6>
              <p>
                <small>{this.state.phone}</small>
              </p>
              <p>
                <small>
                  {this.state.address.street},{this.state.address.suite},
                  {this.state.address.city}
                  <br />
                  {this.state.address.zipcode}
                </small>
              </p>
              <a href={this.state.email}>{this.state.email}</a>
              <br />
              <a href={this.state.website}>{this.state.website}</a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserProfile;
