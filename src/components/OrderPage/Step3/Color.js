import React from "react";

export function Color() {
  return (
    <fieldset className="additionaly__color">
      <legend className="additionaly__color__title">Цвет</legend>
      <ul className="additionaly__color__list">
        <li className="additionaly__color__item">
          <input
            className="additionaly__color__input"
            type="radio"
            name="color"
            id="color"
            value="all-color"
          ></input>
          <label className="additionaly__color__label" htmlFor="color">
            Любой
          </label>
        </li>
        <li className="additionaly__color__item">
          <input
            className="additionaly__color__input"
            type="radio"
            name="color"
            id="red"
            value="red"
          ></input>
          <label className="additionaly__color__label" htmlFor="red">
            Красный
          </label>
        </li>
        <li className="additionaly__color__item">
          <input
            className="additionaly__color__input"
            type="radio"
            name="color"
            id="blue"
            value="blue"
            checked
          ></input>
          <label className="additionaly__color__label" htmlFor="blue">
            Голубой
          </label>
        </li>
      </ul>
    </fieldset>
  );
}
