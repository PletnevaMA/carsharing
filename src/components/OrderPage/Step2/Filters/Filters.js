import React from "react";
import "./Filters.module.scss";
class Filters extends React.Component {
  render() {
    return (
       <ul className="cars__filters">
          <li className="cars__filters__item">
          <input
            className="cars__filters__input"
            type="radio"
            name="model"
            id="all"
            value = "all"
          ></input>
          <label className="cars__filters__label" htmlFor="all">
            Все модели
          </label>
          </li>
          <li className="cars__filters__item">
          <input
            className="cars__filters__input"
            type="radio"
            name="model"
            id="economy"
            value = "economy"
            checked
          ></input>
          <label className="cars__filters__label" htmlFor="economy">
            Эконом
          </label>
          </li>
          <li className="cars__filters__item">
          <input
            className="cars__filters__input"
            type="radio"
            name="model"
            id="premium"
            value = "premium"
          ></input>
          <label className="cars__filters__label" htmlFor="premium">
            Премиум
          </label>
          </li>
        </ul>
    );
  }
}
export default Filters;
