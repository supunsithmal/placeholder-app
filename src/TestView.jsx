import React, { Component } from "react";
import "./TestView.css";

class TestView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="site">
        <header className="site-header">Header</header>
        <main className="site-content">
          <h3>Hello</h3>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
        </main>
        <aside className="site-sidebar">
          <p>sidebar</p>
        </aside>
        <footer className="site-footer">End</footer>
      </div>
    );
  }
}

export default TestView;
