import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./store/Store";

import "./App.css";
import PostList from "./components/posts/PostList";

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <div className="App">
          <PostList />
        </div>
      </Provider>
    );
  }
}

export default App;
