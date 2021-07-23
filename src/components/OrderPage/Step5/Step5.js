import React from "react";
import "./Step5.module.scss";
import Result from "../Result/Result";
import Total from "../Step4/Total/Total";

export function Step5() {
  return (
    <div className="container__step">
      <p className="complete__order">Заказ номер RU58491823</p>
      <Result button="Отменить" color="red" />
      <p className="complete__title">Ваш заказ подтверждён</p>
      <Total />
    </div>
  );
}
