import React from "react";
import "./ButtonCheck.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ButtonCheck = (props) => {
  return (
    <Link to={props.link}>
      <button className={`button-result ${props.color}`}>
        <p className="button-result__text">{props.text}</p>
      </button>
    </Link>
  );
};
export default ButtonCheck;
