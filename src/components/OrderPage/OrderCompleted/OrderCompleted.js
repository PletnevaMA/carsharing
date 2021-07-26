import React from "react";
import "./OrderCompleted.scss";
import CheckOrder from "../CheckOrder/CheckOrder";

export const OrderCompleted =()=> {
  return (
    <div className="container__step">
      <p className="complete__order">Заказ номер RU58491823</p>
      <CheckOrder button="Отменить" color="red" />
      <p className="complete__title">Ваш заказ подтверждён</p>
    </div>
  );
}
