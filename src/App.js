import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./store/Store";

import "./App.css";
import "./Grid.css";

import PostList from "./components/posts/PostList";
import UserProfile from "./components/user/UserProfile";
import UserList from "./components/user/UserList";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import DeviceContainer from "./components/devices/DeviceContainer";
import NewDevice from "./components/devices/NewDevice";

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <div className="site">
          <div className="site-header">
            <Header />
          </div>
          <div className="site-sidebar">
            <Sidebar />
          </div>
          <div className="site-content">
            {/* <PostList /> */}
            <DeviceContainer />
          </div>
          <div className="site-widget">
            <NewDevice />
          </div>

          {/* <div className="container-fluid">
            <div className="row">
              <Sidebar />
              <div className="col-8">
                <PostList />
              </div>
            </div>
          </div> */}
        </div>
      </Provider>
    );
  }
}

export default App;
