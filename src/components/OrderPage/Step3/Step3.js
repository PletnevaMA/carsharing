import React from "react";
import "./Step3.module.scss";
import { Additionaly } from "./Additionaly/Additionaly";
import Result from "../Result/Result";

export function Step3 (){
    return (
      <div className="container__step">
        <Additionaly />
        <Result button="Итого" button_link="/order/step4" />
      </div>
    );
  }
