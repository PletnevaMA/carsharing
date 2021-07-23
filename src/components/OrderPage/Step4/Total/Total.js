import React from "react";
import './Total.module.scss';
import i30 from '../../../../images/i30n.png';

const Total = () => {
  return (
    <div className="total">
       <div className="total__wrapper">
        <p className="total__model">Hyndai, i30 N</p>
        <p className="total__number">K 761 HA 73</p>
        <p className="total__additional">
          <b>Топливо</b> 100%
        </p>
        <p className="total__additional">
          <b>Доступна с</b> 12.06.2019 12:00
        </p>
      </div>
      <img
        className="total__img"
        src={i30}
        alt="ELANTRA view"
        width="256"
        height="116"
      ></img>
    </div>
  );
};
export default Total;
