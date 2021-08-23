import React from "react";
import "./CheckingOrderData.scss";
import CheckOrder from "../CheckOrder/CheckOrder";
import { useSelector } from "react-redux";
import {Tabs, Path} from '../../../const';

const CheckingOrderData =()=> {
  const car = useSelector((state) => state.car);
  const startDate = useSelector((state) => state.startDate);
  const image = useSelector((state) => state.image)
  const carNumber = useSelector((state) => state.carNumber)
  
  return (
    <div className="container__step">
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
      <CheckOrder button="Заказать" button_link = {Path.CHECK}  color ="green" tab = {Tabs.get("ORDER")} isActive = {true}/>
    </div>
  );
}
export default CheckingOrderData;
