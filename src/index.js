import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDNf0JvtXLpZiT08yDW2qEz4TYz7TXPa_U",
  authDomain: "testrecords-ed8e2.firebaseapp.com",
  databaseURL: "https://testrecords-ed8e2.firebaseio.com",
  projectId: "testrecords-ed8e2",
  storageBucket: "testrecords-ed8e2.appspot.com",
  messagingSenderId: "758465732333"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById("root"));
