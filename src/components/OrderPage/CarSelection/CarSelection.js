import React from "react";
import {useSelector } from "react-redux";
import "./CarSelection.scss";
import Filters from "./FiltersCars/FiltersCars";
import CarsList from "./CarsList/CarsList";
import CheckOrder from "../CheckOrder/CheckOrder";
import {Tabs, Path} from '../../../const';


const CarSelection = () => {
  const isActive = useSelector((state) => state.isActive);
  return (
    <div className="container__step">
      <Filters />
      <CheckOrder button="Дополнительно" button_link={Path.OPTIONS} color="green" tab = {Tabs.get("CAR")} isActive = {isActive}/>
      <CarsList />
    </div>
  );
};
export default CarSelection;
