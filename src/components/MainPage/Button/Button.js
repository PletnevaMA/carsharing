import React from "react";
import "./Button.module.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Button extends React.Component {
  render() {
    return (
      <div>
          <Link to="/order/step1">
            <button className="button-standart">
              <p className="button-standart__text">{this.props.text}</p>
            </button>
          </Link>
      </div>
    );
  }
}

export default Button;
