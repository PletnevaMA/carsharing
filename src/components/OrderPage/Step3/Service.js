import React from "react";

export function Service() {
  return (
    <fieldset className="additionaly__service">
      <legend className="additionaly__service__title">Доп услуги</legend>
      <ul className="additionaly__service__list">
        <li className="additionaly__service__item">
          <input
            className="additionaly__service__input"
            type="checkbox"
            name="additional"
            id="full-tank"
            value="full-tank"
          ></input>
          <label className="additionaly__service__label" htmlFor="full-tank">
            Полный бак, 500₽
          </label>
          <div className="additionaly__service__tick"></div>
        </li>
        <li className="additionaly__service__item">
          <input
            className="additionaly__service__input"
            type="checkbox"
            name="additional"
            id="child-seat"
            value="child-seat"
          ></input>
          <label className="additionaly__service__label" htmlFor="child-seat">
            Детское кресло, 200₽
          </label>
          <div className="additionaly__service__tick"></div>
        </li>
        <li className="additionaly__service__item">
          <input
            className="additionaly__service__input"
            type="checkbox"
            name="additional"
            id="right-wheel"
            value="right-wheel"
          ></input>
          <label className="additionaly__service__label" htmlFor="right-wheel">
            Правый руль, 1600₽
          </label>
          <div className="additionaly__service__tick"></div>
        </li>
      </ul>
    </fieldset>
  );
}
