import React from "react";
import "./AdditionalOptions.scss";
import {ColorCar} from './ColorCar';
import {DateRent} from './DateRent';
import {Services} from './Services';
import CheckOrder from "../CheckOrder/CheckOrder";
import {Rate} from './Rate';

const AdditionalOptions = () => {
  return (
    <div className="container__step">
      <div className="additionaly">
        <ColorCar />
        <DateRent />
        <Rate />
        <Services />
      </div>
      <CheckOrder button="Итого" button_link="/order/step4" color="green" />
    </div>
  );
}
export default AdditionalOptions;
