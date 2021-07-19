import React from "react";
import "./Step1.module.scss";
import Logo from "../../Logo/Logo";
import Tabs from "../Tabs/Tabs";
import Location from "./Location/Location";
import Result from "./Result/Result";

class Step1 extends React.Component {
  render() {
    return (
      <div className="container__step1">
        <Location />
        <Result />
      </div>
    );
  }
}
export default Step1;
