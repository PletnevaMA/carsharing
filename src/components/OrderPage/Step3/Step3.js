import React from "react";
import "./Step3.module.scss";
import { Additionaly } from "./Additionaly/Additionaly";
import Result from "../Result/Result";

class Step1 extends React.Component {
  render() {
    return (
      <div className="container__step">
        <Additionaly />
        <Result button="Выбрать модель" button_link="/order/step2" />
      </div>
    );
  }
}
export default Step1;
