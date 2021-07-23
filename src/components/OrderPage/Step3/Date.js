import React from "react";

export function Date() {
  return (
    <fieldset className="additionaly__date">
      <legend className="additionaly__date__title">Дата аренды</legend>
      <div className="additionaly__date__block">
        <label className="additionaly__date__title additionaly__date__margin">
          С
        </label>
        <input
          className="additionaly__date__input"
          name="date-from"
          id="date-from"
          value=""
          placeholder="Введите дату и время"
        ></input>
      </div>
      <div className="additionaly__date__block">
        <label className="additionaly__date__title">По</label>
        <input
          className="additionaly__date__input"
          name="date-to"
          id="date-to"
          value=""
          placeholder="Введите дату и время"
        ></input>
      </div>
    </fieldset>
  );
}
