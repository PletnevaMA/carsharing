import React from "react";
import "./Tabs.module.scss";
import "../Step1/Step1";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Tabs extends React.Component {
  render() {
    return (
      <>
        <ul className="tabs">
          <Link to="/order/step1">
            <li>Местоположение</li>
          </Link>
          <Link to="/order/step2">
            <li>Модель</li>
          </Link>
          <Link to="/order/step3">
            <li>Дополнительно</li>
          </Link>
          <Link to="/order/step4">
            <li>Итого</li>
          </Link>
        </ul>
      </>
    );
  }
}
export default Tabs;
