import React from "react";
import "./Location.module.scss";
import Maps from './Maps';

class Location extends React.Component {
  render() {
    return (
      <div className="location">
        <div className="location__city">
          <span className="city">Город</span>
          <input type="text" className="location__input"></input>
        </div>

        <span className="location__point">Пункт выдачи</span>
        <input
          type="text"
          className="location__input"
          placeholder="Начните вводить пункт..."
        ></input>
        <p className="location__map">Выбрать на карте:</p>
        <Maps/>
      </div>
    );
  }
}
export default Location;
