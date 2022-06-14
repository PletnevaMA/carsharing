import React from "react";
import "./OrderCompleted.scss";
import CheckOrder from "../CheckOrder/CheckOrder";
import { useSelector } from "react-redux";

const OrderCompleted = () => {
  const car = useSelector((state) => state.car);
  const startDate = useSelector((state) => state.startDate);
  const finishDate = useSelector((state) => state.finishDate);
  const image = useSelector((state) => state.image);
  const carNumber = useSelector((state) => state.carNumber);
  return (
    <div className="container__step">
      <div className="total">
        <div className="total__wrapper">
          <p className="complete__order">Заказ номер </p>
          <p className="complete__title">Ваш заказ подтверждён</p>
          <p className="total__model">{car}</p>
          <p className="total__number">{carNumber}</p>
          <p className="total__additional">
            <b>Топливо</b> 100%
          </p>
          <p className="total__additional">
            <b>Доступна с</b> {startDate} <b>по </b> {finishDate}
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

      <CheckOrder button="Отменить" color="red" />
    </div>
  );
};
export default OrderCompleted;
