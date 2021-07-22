import React from "react";
import "./Filters.module.scss";
class Filters extends React.Component {
  render() {
    return (
       <ul className="cars__filters">
          <li className="cars__filters__item">Все модели</li>
          <li className="cars__filters__item">Эконом</li>
          <li className="cars__filters__item">Премиум</li>
        </ul>
    );
  }
}
export default Filters;
