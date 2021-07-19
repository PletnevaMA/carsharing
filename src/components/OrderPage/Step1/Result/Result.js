import React from "react";
import "./Result.module.scss";
import ButtonResult from "../ButtonResult/ButtonResult";

class Result extends React.Component {
  render() {
   
    return (
        <section className="result">
        <div className="result__wrapper">
          <div className="result__title">Ваш заказ:</div>
          <div className="result__point">
            <span>Пункт выдачи</span>
            <span></span>
            <span>Ульяновск, Нариманова 42</span>
          </div>
          <div className="result__price">
            <span className = "result__price__title">Цена: </span>
            <span className = "result__price__count"> от 8 000 до 12 000 ₽</span>
          </div>
          <ButtonResult text = "Выберите модель"/>
        </div>        
      </section>
    );
  }
}
export default Result;
