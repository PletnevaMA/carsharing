import React from "react";
import "./RecordPositionUser.scss";
import LocationUser from "./LocationUser/LocationUser";
import CheckOrder from "../CheckOrder/CheckOrder";



const RecordPositionUser = () => {
  
  
  return (
    <div className="container__step">
      <LocationUser />
      <CheckOrder
        button="Выбрать модель"
        button_link="/order/step2"
        color="green"
      />
    </div>
  );
};
export default RecordPositionUser;
