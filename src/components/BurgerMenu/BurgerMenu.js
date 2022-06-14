import React from "react";
import "./BurgerMenu.module.scss";
import Icons from  './Icons';

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
              <Icons />
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default BurgerMenu;
