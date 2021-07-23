import React from "react";

export function Rate() {
  return (
    <fieldset className="additionaly__rate">
      <legend className="additionaly__rate__title">Тариф</legend>
      <ul className="additionaly__rate__list">
        <li className="additionaly__rate__item">
          <input
            className="additionaly__rate__input"
            type="radio"
            name="rate"
            id="minute"
            value="minute"
          ></input>
          <label className="additionaly__rate__label" htmlFor="minute">
            Поминутно, 7₽/мин
          </label>
        </li>
        <li className="additionaly__rate__item">
          <input
            className="additionaly__rate__input"
            type="radio"
            name="rate"
            id="day"
            value="day"
            checked
          ></input>
          <label className="additionaly__rate__label" htmlFor="day">
            На сутки, 1999₽/мин
          </label>
        </li>
      </ul>
    </fieldset>
  );
}
