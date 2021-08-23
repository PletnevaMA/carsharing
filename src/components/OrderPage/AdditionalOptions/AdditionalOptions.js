import React from "react";
import "./AdditionalOptions.scss";
import {ColorCar} from './ColorCar';
import {DateRent} from './DateRent';
import {Services} from './Services';
import CheckOrder from "../CheckOrder/CheckOrder";
import {Path, Tabs} from '../../../const';
import {Rate} from './Rate';
import { useSelector } from "react-redux";

const AdditionalOptions = () => {
  const isActive = useSelector((state) => state.isActive);
  return (
    <div className="container__step">
      <div className="additionaly">
        <ColorCar />
        <DateRent />
        <Rate />
        <Services />
      </div>
      <CheckOrder button="Итого" button_link={Path.ORDER} color="green" tab = {Tabs.get("OPTIONS")} isActive = {isActive}/>
    </div>
  );
}
export default AdditionalOptions;
