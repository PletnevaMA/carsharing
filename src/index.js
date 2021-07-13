import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.scss";
import "./mixins.scss";


var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);