import React from "react";
import "./CheckOrder.scss";
import ButtonCheck from "./ButtonCheck/ButtonCheck";
import { useSelector } from "react-redux";

const CheckOrder = (props) => {
  const city = useSelector((state) => state.city);
  const point = useSelector((state) => state.point);
  const car = useSelector((state) => state.car);
  const color = useSelector((state) => state.color);
  const rate = useSelector((state) => state.rate);
  const startDate = useSelector((state) => state.startDate);
  const finishDate = useSelector((state) => state.finishDate);
  const price = useSelector((state) => state.price);
  const services = useSelector((state) => state.services);


  const resultOrder = [
    {
      name: `Пункт выдачи`,
      value: [city, point].join(`,\n`),
    },
    {
      name: `Модель`,
      value: car,
    },
    {
      name: `Цвет`,
      value: color,
    },
    {
      name: `Длительность аренды`,
      value: `${startDate} - ${finishDate}`,
    },
    {
      name: `Тариф`,
      value: rate,
    },
    {
      name: `Дополнительные услуги`,
      value: services.join("\n"),
    },
  ];
  return (
    <section className="result">
      <div className="result__wrapper">
        <div className="result__title">Ваш заказ:</div>
        {resultOrder.map((detail) => (
          <div className="result__point">
            <span>{detail.name}</span>
            <span></span>
            <span>{detail.value}</span>
          </div>
        ))}
        <div className="result__price">
          <span className="result__price__title">Цена: </span>
          <span className="result__price__count"> {price}</span>
        </div>
        <ButtonCheck
          text={props.button}
          link={props.button_link}
          color={props.color}
          tab={props.tab}
          isActive={props.isActive}
        />
      </div>
    </section>
  );
};
export default CheckOrder;
