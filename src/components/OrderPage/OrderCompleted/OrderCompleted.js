import React from "react";
import "./OrderCompleted.scss";
import CheckOrder from "../CheckOrder/CheckOrder";
import { useSelector } from "react-redux";

 const OrderCompleted = () => {
  const car = useSelector((state) => state.car);
  const startDate = useSelector((state) => state.startDate);
  const image = useSelector((state) => state.image)
  const carNumber = useSelector((state) => state.carNumber)
  return (
    <div className="container__step">
      <p className="complete__order">Заказ номер </p>
      <CheckOrder button="Отменить" color="red" />
      <p className="complete__title">Ваш заказ подтверждён</p>
      <div className="total">
       <div className="total__wrapper">
        <p className="total__model">{car}</p>
        <p className="total__number">{carNumber}</p>
        <p className="total__additional">
          <b>Топливо</b> 100%
        </p>
        <p className="total__additional">
          <b>Доступна с</b> {startDate}
        </p>
      </div>
      <img
        className="total__img"
        src={image}
        alt="ELANTRA view"
        width="256"
        height="116"
      ></img>
      </div>
    </div>
  );
}
export default OrderCompleted;
