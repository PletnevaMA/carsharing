import React from "react";
import "./CarInput.scss";

const CarInput =({ id, title, price, img, isActive, setCarValue}) => {
  const carListButtonClickHandler = (e) => {
    e.preventDefault();
    setCarValue(id);
}
    return (
      <>
        <article className="carlist__item">
          <button className={`carlist__button ${isActive ? `carlist__button__active` : ``}`} type="button" onClick={carListButtonClickHandler}>
            <h4 className={`carlist__title  ${isActive ? `carlist__title__active` : ``}`}>{title}</h4>
            <p className={`carlist__price ${isActive ? `carlist__price__active` : ``}`}>{price}</p>
            <img
              className="carlist__picture"
              src={img}
              width="256"
              height="116"
            />
          </button>
        </article>
      </>
    );
}

export default CarInput;
