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
          <div className="result__point">
            <span>Модель</span>
            <span></span>
            <span>Hyndai, i30n</span>
          </div>
          <div className="result__point">
            <span>Цвет</span>
            <span></span>
            <span>Голубой</span>
          </div>
          <div className="result__point">
            <span>Длительность аренды</span>
            <span></span>
            <span>1д2ч</span>
          </div>
          <div className="result__point">
            <span>Тариф</span>
            <span></span>
            <span>На сутки</span>
          </div>
          <div className="result__point">
            <span>Полный бак</span>
            <span></span>
            <span>Да</span>
          </div>
          <div className="result__price">
            <span className="result__price__title">Цена: </span>
            <span className="result__price__count"> от 8 000 до 12 000 ₽</span>
          </div>
          <ButtonResult text={this.props.button} link = {this.props.button_link} />
        </div>
      </section>
    );
  }
}
export default Result;
