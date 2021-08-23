import React from "react";
import { setImage } from "../../../../store/action";
import "./CarInput.scss";
const CarInput = ({
  id,
  title,
  priceMin,
  priceMax,
  imgPath,
  carNumber,
  isActive,
  setCarValue,
  setCarPrice, 
  setCarImage, 
  setCarNumber
}) => {
  const carListButtonClickHandler = (e) => {
    e.preventDefault();
    setCarValue(title);
    setCarPrice(priceMax);
    setCarImage(pathImage(imgPath));
    setCarNumber(carNumber)
  };
  function pathImage(img) {
    return img.includes("/files")
      ? `https://api-factory.simbirsoft1.com${img}`
      : img;
  }
  return (
    <>
      <article className="carlist__item">
        <button
          className={`carlist__button ${
            isActive ? `carlist__button__active` : ``
          }`}
          type="button"
          onClick={carListButtonClickHandler}
        >
          <h4
            className={`carlist__title  ${
              isActive ? `carlist__title__active` : ``
            }`}
          >
            {title}
          </h4>
          <p
            className={`carlist__price ${
              isActive ? `carlist__price__active` : ``
            }`}
          >
            {priceMin} - {priceMax} ₽
          </p>
          <img
            className="carlist__picture"
            src={pathImage(imgPath)}
            width="256"
            height="116"
          />
        </button>
      </article>
    </>
  );
};

export default CarInput;
