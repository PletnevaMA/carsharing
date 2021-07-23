import React from "react";
import "./Step4.module.scss";
import Result from "../Result/Result";
import Total from "./Total/Total";

export function Step4() {
  return (
    <div className="container__step">
      <Total />
      <Result button="Заказать" button_link="/order/step5" />
    </div>
  );
}
