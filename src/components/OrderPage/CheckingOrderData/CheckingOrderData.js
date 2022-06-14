import React, { useState } from "react";
import "./CheckingOrderData.scss";
import CheckOrder from "../CheckOrder/CheckOrder";
import { useSelector, useDispatch } from "react-redux";
import { Path } from "../../../const";
import ButtonCheck from "../CheckOrder/ButtonCheck/ButtonCheck";
import { postOrderFetch } from "../../../store/api";

const CheckingOrderData = () => {
  const city = useSelector((state) => state.city);
  const point = useSelector((state) => state.point);
  const cities = useSelector((state) => state.cities);
  const points = useSelector((state) => state.points);
  const car = useSelector((state) => state.car);
  const cars = useSelector((state) => state.cars);
  const rate = useSelector((state) => state.rate);
  const rates = useSelector((state) => state.rates);
  const color = useSelector((state) => state.color);
  const price = useSelector((state) => state.price);
  const services = useSelector((state) => state.services);
  const startDate = useSelector((state) => state.startDate);
  const finishDate = useSelector((state) => state.finishDate);
  const image = useSelector((state) => state.image);
  const carNumber = useSelector((state) => state.carNumber);
  const isOrdered = useSelector((state) => state.isOrdered);


  let orderReady;
  const dispatch = useDispatch();
  const tabButtonClick = () => {
    readyOrder();    
    dispatch(postOrderFetch(orderReady));
    
  };

  const getIdByName = (array, element) => {
    let id;
    array.map((el) => {
      el.name === element ? (id = el.id) : undefined;
    });
    return id;
  };

  const getIdPointByAdress = (points, point) => {
    let id;
    points.map((el) => {
      el.address === point ? (id = el.id) : undefined;
    });
    return id;
  };

  const getIdRateByName = (rates, rate) => {
    let id;
    rates.map((el) => {
      el.rateTypeId.name === rate ? (id = el.id) : undefined;
    });
    return id;
  };

  const createId = () => {
    let id = [];
    id[0] = 5;
    for (let i = 1; i < 24; i++) {
      id[i] = Math.floor(Math.random() * 10);
    }
    return id.join("");
  };


  const readyOrder = () => {
    orderReady = {
      orderStatusId: { id: createId().toString() },
      cityId: {id: getIdByName(cities, city)},
      pointId: { id: getIdPointByAdress(points, point) },
      carId: { id: getIdByName(cars, car) },
      color: color,
      dateFrom: new Date(startDate).getTime(),
      dateTo: new Date(finishDate).getTime(),
      rateId: { id: getIdRateByName(rates, rate) },
      price: price,
      isFullTank: services.includes("Полный бак, 500₽") ? true : false,
      isNeedChildChair: services.includes("Детское кресло, 200₽")
        ? true
        : false,
      isRightWheel: services.includes("Правый руль, 1600₽") ? true : false,
    };
  };

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
      <CheckOrder button="Заказать" color="green" isActive={true} />
      <div className={`modal ${isOrdered ? `` : `modal--closed`}`}>
        <div className="modal__wrapper">
          <h3 className="modal__title">Подтвердить заказ</h3>
          <ButtonCheck
            key="Подтвердить"
            button="Подтвердить"
            color="green"
            isActive={true}
            button_link={Path.CHECK}
            tabButtonClick={tabButtonClick}
          />
          <ButtonCheck
            key="Вернуться"
            button="Вернуться"
            color="red"
            isActive={true}
            button_link={Path.ORDER}
          />
        </div>
      </div>
    </div>
  );
};
export default CheckingOrderData;
