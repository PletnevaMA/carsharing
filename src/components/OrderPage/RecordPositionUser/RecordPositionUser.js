import React from "react";
import "./RecordPositionUser.scss";
import LocationUser from "./LocationUser/LocationUser";
import CheckOrder from "../CheckOrder/CheckOrder";
import {Tabs, Path} from '../../../const';
import { useSelector } from "react-redux";


const RecordPositionUser = () => {
  const isActive = useSelector((state) => state.isActive);
  return (
    <div className="container__step">
      <LocationUser/>
      <CheckOrder
        button="Выбрать модель"
        button_link={Path.CAR}
        color="green"
        tab = {Tabs.get("POSITION")}
        isActive = {isActive}
      />
    </div>
  );
};
export default RecordPositionUser;
