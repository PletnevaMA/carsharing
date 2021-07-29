import React from "react";
import "./CarSelection.scss";
import Filters from "./FiltersCars/FiltersCars";
import CarsList from "./CarsList/CarsList";
import CheckOrder from "../CheckOrder/CheckOrder";


const CarSelection = () => {
  return (
    <div className="container__step">
      <Filters />
      <CheckOrder button="Дополнительно" button_link="/order/step3" color="green" />
      <CarsList />
    </div>
  );
};
export default CarSelection;
