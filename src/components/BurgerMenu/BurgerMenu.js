import React from "react";
import "./BurgerMenu.module.scss";
import { ReactSVG } from 'react-svg';
import telegram from '../../images/Telegram.svg';
import facebook from "../../images/Facebook.svg";
import instagram from "../../images/Instagram.svg";

class BurgerMenu extends React.Component {
  render() {
   
    return (
      <>
        <div className="hamburgermenu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor ="menu__toggle">
            <span></span>
          </label>

          <ul className="menu__box">
            <li>
              <a className="menu__item" href="#">
                Парковка
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                Страховка
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                Бензин
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                Обслуживание
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
              <span className = "menu__item__icon">
              <ReactSVG src= {telegram}/>
              </span>
              <span className = "menu__item__icon">
                <ReactSVG src= {facebook}/>
              </span>
              <span className = "menu__item__icon">
              <ReactSVG src= {instagram}/>
              </span>
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default BurgerMenu;
