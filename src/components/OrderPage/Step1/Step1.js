import React from "react";
import "./Step1.module.scss";
import Location from "./Location/Location";
import Result from "../Result/Result";

class Step1 extends React.Component {
  render() {
    return (
      <div className="container__step">
        <Location />
        <Result button = "Выбрать модель" button_link = "/order/step2"/>
      </div>
    );
  }
}
export default Step1;
