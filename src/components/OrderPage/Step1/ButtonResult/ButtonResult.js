import React from "react";
import "./ButtonResult.module.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class ButtonResult extends React.Component {
  render() {
    return (
      <>
          <Link to="/step1">
            <button className="button-result">
              <p className="button-result__text">{this.props.text}</p>
            </button>
          </Link>
      </>
    );
  }
}

export default ButtonResult;